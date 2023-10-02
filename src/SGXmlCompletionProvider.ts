import {
  isXmlScope,
  Program,
  ProvideCompletionsEvent,
  XmlFile,
} from 'brighterscript';
import {
  CompletionItem,
  CompletionItemKind,
  InsertTextFormat,
} from 'vscode-languageserver-types';
import { nodes } from 'brighterscript/dist/roku-types';
import { SystemCompletion, SystemNode } from './SystemCompletion';

const OPEN_CLOSE_TAGS = ['<', '</', '>', '/>'];
const systemNodes = nodes as unknown as { [key: string]: SystemNode };

interface LinkedToken {
  index: number;
  image: string;
  startOffset: number;
  startLine: number;
  startColumn: number;
  endOffset: number;
  endLine: number;
  endColumn?: number;
}

type SystemCompletions = { [key: string]: SystemCompletion };

export class SGXmlCompletionProvider {
  systemCompletions: SystemCompletions;

  constructor(private program: Program) {
    this.systemCompletions = this.processSystemNodes();
  }

  /**
   *
   * @returns system nodes indexed by name {[name]: SystemCompletion}
   */
  private processSystemNodes(): SystemCompletions {
    const result: SystemCompletions = {};
    for (const key in systemNodes) {
      const node = systemNodes[key];
      result[key] = new SystemCompletion(node);
    }
    return result;
  }

  getFieldCompletions(componentName: string): CompletionItem[] {
    componentName = componentName.toLocaleLowerCase();
    const projectComponent = this.program.getComponent(componentName);
    let result: CompletionItem[] = [];
    if (projectComponent) {
      result.push(...this.getCompletionsFromXmlFile(projectComponent.file));
      const extendsName = projectComponent.file.ast.component?.extends;
      if (extendsName) {
        result.push(...this.getAllAvailableFields(extendsName));
      }
    } else if (systemNodes[componentName]) {
      const node = this.systemCompletions[componentName];
      result.push(...node.fields);
      if (node.extends) {
        result.push(...this.getAllAvailableFields(node.extends));
      }
    } else {
      this.program.logger.error(
        `Unknown component extension: ${componentName}`
      );
    }
    return result;
  }

  getCompletionsFromXmlFile(xmlFile: XmlFile): CompletionItem[] {
    return (
      xmlFile.ast.component?.api.fields.map((f) => {
        return {
          label: f.id,
          detail: `${f.type}${f.value ? `: ${f.value}` : ''}`,
        };
      }) ?? []
    );
  }

  getComponentCompletions(file: XmlFile, beforeToken: string | undefined) {
    const completions = [];
    // suggest components
    completions.unshift(
      ...Object.entries(this.systemCompletions).map(([key, obj]) => {
        return {
          label: obj.name,
          sortText: '<' + obj.name,
          kind: CompletionItemKind.Class,
          insertTextFormat: InsertTextFormat.Snippet,
          insertText: `${beforeToken === '<' ? '' : '<'}${obj.name} $0></${
            obj.name
          }>`,
        } as CompletionItem;
      }),
      ...this.program
        .getScopes()
        .filter(isXmlScope)
        .filter((s) => s.xmlFile.componentName !== file.componentName)
        .map((s) => s.xmlFile.componentName)
        .map((name) => {
          return {
            label: name.text,
            sortText: '<' + name.text,
            kind: CompletionItemKind.Class,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `${beforeToken === '<' ? '' : '<'}${name.text} $0></${
              name.text
            }>`,
          } as CompletionItem;
        })
    );
    return completions;
  }

  getAllAvailableFields(componentName: string): any[] {
    const component = this.program.getComponent(componentName);
    let result = [];
    if (component) {
      result = [
        ...(component.file.ast.component?.api?.fields.map((f) => {
          return {
            name: f.id,
            type: f.type,
            sortText: '0_' + f.id,
          };
        }) ?? []),
        ...this.getAllAvailableFields(
          component.file.ast.component?.extends ?? ''
        ).map((f) => {
          return {
            ...f,
            sortText: '1_' + f.sortText,
          };
        }),
      ];
    } else {
      const rokuComponent = (nodes as any)[componentName.toLowerCase()];
      if (rokuComponent) {
        const rokuComponentFields = rokuComponent.fields
          ?.filter((f: any) => f.accessPermission?.includes('WRITE'))
          .map(
            (f: {
              accessPermission: string;
              default: string;
              description: string;
              name: string;
              type: string;
            }) => {
              return {
                name: f.name,
                type: f.type,
                sortText: '0_' + f.name,
              };
            }
          );
        if (rokuComponent.extends) {
          result = [
            ...rokuComponentFields,
            ...this.getAllAvailableFields(rokuComponent.extends.name).map(
              (f) => {
                return {
                  ...f,
                  sortText: '1_' + f.sortText,
                };
              }
            ),
          ];
        } else {
          result = rokuComponentFields;
        }
      }
    }
    const resultMap: any = {};
    result.forEach((e: any) => {
      resultMap[e.name] = e;
    });
    result = Object.values(result);
    return result;
  }

  process(event: ProvideCompletionsEvent) {
    const { file, position } = event;
    const tokens: LinkedToken[] = event.file.parser.tokens.map((t, i) => {
      return {
        index: i,
        ...t,
      } as LinkedToken;
    });

    const cursorToken = tokens.find((t) => {
      (t: LinkedToken) => {
        return (
          (t.startLine - 1 <= position.line &&
            t.startColumn - 1 < position.character &&
            t.endColumn) ??
          0 > position.character - 1
        );
      };
    });

    const beforeToken = cursorToken
      ? cursorToken
      : tokens.find((t, i, o) => {
          if (t.endLine <= position.line + 1) {
            const nextStartLine = o[i + 1]?.startLine ?? -1;
            let nextStartColumn = -1;
            if (nextStartLine === position.line + 1) {
              nextStartColumn = o[i + 1]?.startColumn;
            } else if (nextStartLine > position.line + 1) {
              nextStartColumn = Number.MAX_SAFE_INTEGER;
            }
            return (
              (t.endLine < position.line + 1 ||
                (t.endColumn ?? 0) < position.character + 1) &&
              nextStartColumn > position.character
            );
          }
          return false;
        });

    if (beforeToken) {
      if (beforeToken.image === '<') {
        event.completions.push(
          ...this.getComponentCompletions(file as XmlFile, beforeToken?.image)
        );
        return;
      } else {
        let openTag: undefined | LinkedToken = beforeToken;
        // iterate backwards until we find some kind of open or close tag
        while (openTag) {
          if (OPEN_CLOSE_TAGS.includes(openTag.image)) {
            break;
          }
          openTag = tokens[openTag.index - 1];
        }
        switch (openTag?.image) {
          case '<': // we are  inside an element definition
            const fields: { name: string; value: string }[] = [];
            let nextField: LinkedToken | undefined = tokens[openTag.index + 1];
            while (nextField) {
              if (OPEN_CLOSE_TAGS.includes(nextField.image)) {
                break;
              } else if (nextField.image === '=') {
                fields.push({
                  name: tokens[nextField.index - 1]?.image ?? '',
                  value:
                    tokens[nextField.index + 1]?.image.replace(/"/g, '') ?? '',
                });
              }
              nextField = tokens[nextField.index + 1];
            }
            const componentName = tokens[openTag.index + 1]?.image;
            event.completions.push(
              ...(this.getAllAvailableFields(componentName ?? '')
                .filter((f) => !fields.map((f) => f.name).includes(f.name))
                .map((field) => {
                  return {
                    label: field.name,
                    insertText: `${field.name}="\${1:${field.value ?? ''}}"`,
                    kind: CompletionItemKind.Field,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: field.type,
                    sortText: field.sortText,
                  } as CompletionItem;
                }) ?? [])
            );
            return;
          case '>':
          case '/>':
            event.completions.push(
              ...this.getComponentCompletions(
                file as XmlFile,
                beforeToken?.image
              )
            );
            return;
          default:
            break;
        }
      }
    } else {
      const childrenOpenToken = tokens.find((token) => {
        return token.image.toLowerCase() === 'children';
      });
      if (
        childrenOpenToken &&
        (childrenOpenToken.endLine <= position.line ||
          (childrenOpenToken.endLine === position.line + 1 &&
            childrenOpenToken.endColumn! < position.character))
      ) {
        event.completions.push(
          ...this.getComponentCompletions(file as XmlFile, undefined)
        );
      } else {
        event.completions.push({
          label: 'new component',
          insertText: `<component name="" extends="Group">
      
</component>`,
        });
      }
    }
  }
}
