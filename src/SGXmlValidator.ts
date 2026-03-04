import { BscFile, OnFileValidateEvent, Program, XmlFile } from "brighterscript";
import { nodes } from "./data";
import { SystemNode } from "./SystemCompletion";
import fieldTypeValidator from "./FieldTypeValidator";
import { SGNode } from "brighterscript/dist/parser/SGTypes";
import { NoFileDiagnostic, SGXmlDiagnostics } from "./SGXmlDiagnostics";


const systemNodes = nodes as unknown as { [key: string]: SystemNode };


export class SGXmlValidator {


    program: Program;

    constructor(program: Program) {
        this.program = program;
    }

    validateXmlFile(event: OnFileValidateEvent<BscFile>) {
        const file = event.file as XmlFile;
        const diags = file?.ast?.component?.children?.children?.flatMap((child) => {
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
        const diags: NoFileDiagnostic[] = []
        if (this.validateComponentExists(element)) {
            diags.push(...this.validateNodeElement(element))
            element.children.forEach((child) => {
                diags.push(...this.validateComponent(child))
            })
        } else {
            this.program.logger.error(`Unknown component: ${element.tag.text}`, element);
            const diag = SGXmlDiagnostics.UnknownComponent(element.tag.text, element);
            diags.push(diag)

        }
        return diags;
    }


    validateNodeElement(element: SGNode): NoFileDiagnostic[] {
        const diags: NoFileDiagnostic[] = []
        const fields = this.findAllFields(element.tag.text);
        element.attributes.forEach((attr) => {
            const field = fields.find(a => {
                return a.id.toLowerCase() === attr.key.text.toLowerCase()
            })
            if (!field) {
                this.program.logger.error(`Invalid system attribute: ${attr.key.text}`, attr);
                diags.push(SGXmlDiagnostics.InvalidSystemAttribute(attr.key.text, element.tag.text, attr));
                return
            }
            if (field.type && !fieldTypeValidator.validateFieldType(attr.value.text, field.type)) {
                this.program.logger.error(`Invalid value for attribute: ${attr.key.text}`, attr);
                diags.push(SGXmlDiagnostics.InvalidAttributeValue(attr.key.text, field.type, attr));
            }
            if (field.id !== attr.key.text) {
                this.program.logger.warn(`Field "${attr.key.text}" should be "${field.id}"`, attr);
                diags.push(SGXmlDiagnostics.AttributeNameCaseMismatch(attr.key.text, field.id, attr));
            }
        })
        return diags;
    }

    validateComponentExists(element: SGNode): boolean {
        let component = this.program.getComponent(element.tag.text) || systemNodes[element.tag.text.toLocaleLowerCase()]
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
