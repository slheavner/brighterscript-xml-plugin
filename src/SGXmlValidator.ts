import { BscFile, BsDiagnostic, OnFileValidateEvent, Program, XmlFile } from "brighterscript";
import { nodes } from "brighterscript/dist/roku-types";
import { SystemNode } from "./SystemCompletion";
import fieldTypeValidator from "./FieldTypeValidator";
import { SGNode } from "brighterscript/dist/parser/SGTypes";


const systemNodes = nodes as unknown as { [key: string]: SystemNode };

type NoFileDiagnostic = Omit<BsDiagnostic, 'file'>

export class SGXmlValidator {


    program: Program;

    constructor(program: Program) {
        this.program = program;
        for (const systemNodeKey in systemNodes) {
            const systemNode = systemNodes[systemNodeKey];
            systemNode.fields.forEach(field => {
                const result = fieldTypeValidator.validateFieldType("", field.type);
                if (typeof result === 'string') {
                    this.program.logger.error(`Unknown field type: "${result}" for field ${field.name} in system node ${systemNode.name}`);
                }
            })
        }
    }

    validateXmlFile(event: OnFileValidateEvent<BscFile>) {
        const file = event.file as XmlFile;
        const diags = file?.ast?.component?.children.children.flatMap((child) => {
            return this.validateComponent(child).map(diag => {
                return {
                    ...diag,
                    file: file
                }
            })
        })
        event.program.addDiagnostics(diags || []);
    }

    validateComponent(element: SGNode): NoFileDiagnostic[] {

        let component: any = this.program.getComponent(element.tag.text)
        if (component) {
            return this.validateProjectComponent(element, component.file as XmlFile)
        }
        component = systemNodes[element.tag.text.toLocaleLowerCase()]
        if (component) {
            return this.validateSystemNode(element, component)
        }
        this.program.logger.error(`Unknown component: ${element.tag.text}`, element);
        const diag = {
            message: `Unknown component: ${element.tag.text}`,
            range: element.tag.range!,
        }
        return [diag]

    }


    validateSystemNode(element: SGNode, systemNode: SystemNode): NoFileDiagnostic[] {
        const diags: NoFileDiagnostic[] = []
        const fields = this.findAllFields(systemNode.name);
        element.attributes.forEach((attr) => {
            const field = fields.find(a => {
                return a.id === attr.key.text
            })
            if (!field) {
                this.program.logger.error(`Invalid system attribute: ${attr.key.text}`, attr);
                diags.push({
                    message: `Invalid system attribute: ${attr.key.text}`,
                    range: attr.key.range!,
                });
            } else if (!fieldTypeValidator.validateFieldType(attr.value.text, field.type)) {
                this.program.logger.error(`Invalid value for attribute: ${attr.key.text}`, attr);
                diags.push({
                    message: `Attribute "${attr.key.text}" does not match type: ${field.type}`,
                    range: attr.value?.range!,
                });

            }
        })
        return diags;
    }

    validateProjectComponent(element: SGNode, file: XmlFile): NoFileDiagnostic[] {
        const diags: NoFileDiagnostic[] = []
        const fields = this.findAllFields(element.tag.text);
        element.attributes.forEach((attr) => {
            const field = fields.find(a => {
                return a.id === attr.key.text
            })
            if (!field) {
                this.program.logger.error(`Invalid attribute: ${attr.key.text}`, attr);
                diags.push({
                    message: `Invalid attribute: ${attr.key.text}`,
                    range: attr.key.range!,
                });
            } else if (!fieldTypeValidator.validateFieldType(attr.value.text, field.type)) {
                this.program.logger.error(`Invalid value for attribute: ${attr.key.text}`, attr);
                diags.push({
                    message: `Attribute "${attr.key.text}" does not match type: ${field.type}`,
                    range: attr.value?.range!,
                });
            }
        })
        return diags;
    }


    findAllFields(name: string) {
        const fields: {
            id: string
            type?: string
            alias?: string
        }[] = [];
        let component: XmlFile | SystemNode = this.program.getComponent(name)?.file as XmlFile;
        if (component) {
            if (component.ast.component?.api?.fields) {
                fields.push(...component.ast.component.api.fields.map(f => {
                    return {
                        id: f.id,
                        type: f.type,
                        alias: f.alias
                    }
                }) || [])
            }
            if (component.ast.component?.extends) {
                fields.push(...this.findAllFields(component.ast.component?.extends))
            }
        }
        component = systemNodes[name.toLocaleLowerCase()]
        if (component) {
            fields.push(...component.fields?.map(f => {
                return {
                    id: f.name,
                    type: f.type
                }
            }) || [])
            if (component.extends) {
                fields.push(...this.findAllFields(component.extends.name))
            }
        }

        return fields;
    }

}
