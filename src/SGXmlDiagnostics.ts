import { BsDiagnostic, DiagnosticSeverity } from "brighterscript"
import { SGAttribute, SGNode } from "brighterscript/dist/parser/SGTypes"

export type NoFileDiagnostic = Omit<BsDiagnostic, 'file'>


export const SGXmlDiagnostics = {
    UnknownComponent: (componentName: string, element: SGNode): NoFileDiagnostic => ({
        message: `Unknown component: ${componentName}`,
        severity: DiagnosticSeverity.Error,
        code: 'SG1001',
        range: element.tag.range!
    }),
    InvalidSystemAttribute: (attributeName: string, component: string, attr: SGAttribute): NoFileDiagnostic => ({
        message: `Field "${attributeName}" not found on component "${component}"`,
        severity: DiagnosticSeverity.Error,
        code: 'SG1002',
        range: attr.key.range!
    }),
    InvalidAttributeValue: (attributeName: string, expectedType: string, attr: SGAttribute): NoFileDiagnostic => ({
        message: `Field value "${attributeName}" does not match type ${expectedType}`,
        severity: DiagnosticSeverity.Error,
        code: 'SG1003',
        range: attr.value.range!
    }),
    AttributeNameCaseMismatch: (attributeName: string, expectedName: string, attr: SGAttribute): NoFileDiagnostic => ({
        message: `Field "${attributeName}" should match case for "${expectedName}"`,
        severity: DiagnosticSeverity.Warning,
        code: 'SG2001',
        range: attr.key.range!
    })
}