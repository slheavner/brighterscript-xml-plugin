import { BsDiagnostic, DiagnosticSeverity } from "brighterscript"
import { SGAttribute, SGElement } from "brighterscript/dist/parser/SGTypes"

export type NoFileDiagnostic = Omit<BsDiagnostic, 'file'>


export const SGXmlDiagnostics = {
    UnknownComponent: (componentName: string, element: SGElement): NoFileDiagnostic => ({
        message: `Unknown component: ${componentName}`,
        severity: DiagnosticSeverity.Error,
        code: 'SG1001',
        location: element.tokens.startTagName.location!
    }),
    InvalidSystemAttribute: (attributeName: string, component: string, attr: SGAttribute): NoFileDiagnostic => ({
        message: `Field "${attributeName}" not found on component "${component}"`,
        severity: DiagnosticSeverity.Error,
        code: 'SG1002',
        location: attr.tokens.key.location!
    }),
    InvalidAttributeValue: (attributeName: string, expectedType: string, attr: SGAttribute): NoFileDiagnostic => ({
        message: `Field value "${attributeName}" does not match type ${expectedType}`,
        severity: DiagnosticSeverity.Error,
        code: 'SG1003',
        location: attr.tokens.value?.location!
    }),
    AttributeNameCaseMismatch: (attributeName: string, expectedName: string, attr: SGAttribute): NoFileDiagnostic => ({
        message: `Field "${attributeName}" should match case for "${expectedName}"`,
        severity: DiagnosticSeverity.Warning,
        code: 'SG2001',
        location: attr.tokens.key.location!
    })
}