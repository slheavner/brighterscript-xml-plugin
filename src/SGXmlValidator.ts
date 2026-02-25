import { BscFile, BsDiagnostic, Program, ValidateFileEvent, XmlFile } from "brighterscript";
import { nodes } from "./data";
import { SystemNode } from "./SystemCompletion";
import fieldTypeValidator from "./FieldTypeValidator";
import { SGElement, SGNode } from "brighterscript/dist/parser/SGTypes";
import { NoFileDiagnostic, SGXmlDiagnostics } from "./SGXmlDiagnostics";


const systemNodes = nodes as unknown as { [key: string]: SystemNode };


export class SGXmlValidator {

    program: Program;

    constructor(program: Program) {
        this.program = program;
    }

    validateXmlFile(event: ValidateFileEvent<BscFile>) {
        const file = event.file as XmlFile;
        const diags: BsDiagnostic[] = file?.ast?.componentElement?.childrenElement?.elements.flatMap((child) => {
            return this.validateComponent(child)
        }) ?? []
        event.program.diagnostics.register(diags);
    }

    validateComponent(element: SGElement): NoFileDiagnostic[] {
        const diags: NoFileDiagnostic[] = []
        if (!element.tagName) {
            return diags;
        }
        if (this.validateComponentExists(element)) {
            diags.push(...this.validateNodeElement(element))
            element.elements.forEach((child) => {
                diags.push(...this.validateComponent(child))
            })
        } else {
            this.program.logger.error(`Unknown component: ${element.tagName}`, element);
            const diag = SGXmlDiagnostics.UnknownComponent(element.tagName, element);
            diags.push(diag)
        }
        return diags;
    }


    validateNodeElement(element: SGElement): NoFileDiagnostic[] {
        const diags: NoFileDiagnostic[] = []
        const fields = this.findAllFields(element.tagName);
        element.attributes.forEach((attr) => {
            const field = fields.find(a => {
                return a.id.toLowerCase() === attr.key.toLowerCase()
            })
            if (!field) {
                this.program.logger.error(`Invalid system attribute: ${attr.key}`, attr);
                diags.push(SGXmlDiagnostics.InvalidSystemAttribute(attr.key, element.tagName, attr));
                return
            }
            if (field.type && !fieldTypeValidator.validateFieldType(attr.value, field.type)) {
                this.program.logger.error(`Invalid value for attribute: ${attr.key}`, attr);
                diags.push(SGXmlDiagnostics.InvalidAttributeValue(attr.key, field.type, attr));
            }
            if (field.id !== attr.key) {
                this.program.logger.warn(`Field "${attr.key}" should be "${field.id}"`, attr);
                diags.push(SGXmlDiagnostics.AttributeNameCaseMismatch(attr.key, field.id, attr));
            }
        })
        return diags;
    }

    validateComponentExists(element: SGElement): boolean {
        let component = this.program.getComponent(element.tagName) || systemNodes[element.tagName.toLocaleLowerCase()]
        return !!component
    }

    findAllFields(name: string) {
        const fields: {
            id: string
            type?: string
            alias?: string
        }[] = [];
        let component: XmlFile | SystemNode = this.program.getComponent(name)?.file as XmlFile;
        if (component) {
            if (component.ast.componentElement?.interfaceElement?.fields) {
                fields.push(...component.ast.componentElement.interfaceElement.fields.map(f => {
                    return {
                        id: f.id,
                        type: f.type,
                        alias: f.alias
                    }
                }) || [])
            }
            if (component.ast.componentElement?.extends) {
                fields.push(...this.findAllFields(component.ast.componentElement.extends))
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
