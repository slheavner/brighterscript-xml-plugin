import { CompletionItem } from 'vscode-languageserver-types';

export interface SystemNode {
  description: string;
  extends: {
    name: string;
    url: string;
  };
  name: string;
  fields: {
    accessPermission: string;
    default: string;
    description: string;
    name: string;
    type: string;
  }[];
  interfaces: { name: string; url: string }[];
}

export class SystemCompletion {
  name: string;
  component: CompletionItem;
  fields: CompletionItem[];
  extends?: string;

  constructor(systemNode: SystemNode) {
    this.name = systemNode.name;
    this.component = {
      label: systemNode.name,
    };
    this.extends = systemNode.extends?.name;
    this.fields = systemNode.fields
      .filter((f) => f.accessPermission.includes('WRITE'))
      .map((f) => {
        return {
          label: f.name,
          type: f.type,
          detail: f.default,
          description: f.description,
        };
      });
  }
}
