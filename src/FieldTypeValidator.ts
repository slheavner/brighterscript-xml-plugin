import { nodes } from "brighterscript/dist/roku-types";
const systemNodes: { [key: string]: boolean } = nodes as unknown as { [key: string]: boolean };

const fieldTypeValidator: { [key: string]: Function } = {

    validateFieldType: (value: string, type: string) => {
        if (!value) {
            value = '';
        }
        const normalizedType = fieldTypeValidator.normalizeType(type);
        const validator = fieldTypeValidator[normalizedType] as Function;
        if (validator) {
            return validator(value);
        }
        return normalizedType; // If no specific validator exists, assume it's valid
    },
    normalizeType: (value: string) => {
        let normalized = value.toLowerCase();

        if (normalized.startsWith('associative array of ')) {
            normalized = 'assocarray';
        }
        if (normalized.startsWith('targetset')) {
            normalized = 'array';
        }
        if (normalized.endsWith(' node') || systemNodes[normalized]) {
            normalized = 'node';
        }
        if (normalized.endsWith(' string')) {
            normalized = 'string';
        }
        if (normalized === 'event') {
            normalized = 'string';
        }
        if (normalized.includes('**')) {
            normalized = 'node'
        }
        if (normalized.startsWith('vector2d')) {
            normalized = 'vector2d';
        }
        if (normalized.startsWith('color')) {
            normalized = 'color';
        }
        normalized = normalized.replace('associative array', 'assocarray')
        if (normalized.includes('array of')) {
            normalized = normalized.replace('roarray of', '').replace('array of', '').trim()
            if (normalized.endsWith('s')) {
                normalized = normalized.slice(0, -1);
            }
            normalized = `${normalized}array`;
        }
        if (normalized === `float'array`) {
            normalized = 'floatarray';
        }
        return normalized;
    },
    integer: (value: string) => {
        return /^\d+$/.test(value);
    },
    int: (value: string) => {
        return fieldTypeValidator.integer(value);
    },
    boolean: (value: string) => {
        return /^(true|false)$/.test(value);
    },
    double: (value: string) => {
        return fieldTypeValidator.float(value);
    },
    string: (value: string) => {
        return typeof value === 'string';
    },
    float: (value: string) => {
        return /^-?\d+(\.\d+)?$/.test(value) || /^\.\d+$/.test(value);
    },
    color: (value: string) => {
        return /^(#|0[xX])([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value);
    },
    str: (value: string) => {
        return fieldTypeValidator.string(value);
    },
    time: (value: string) => {
        return fieldTypeValidator.float(value);
    },
    bool: (value: string) => {
        return fieldTypeValidator.boolean(value);
    },
    node: (value: string) => {
        return fieldTypeValidator.string(value);
    },
    longinteger: (value: string) => {
        return fieldTypeValidator.integer(value)
    },
    asArray: (fn: Function, value: string) => {
        if (value.startsWith('[') && value.endsWith(']')) {
            const items = value.slice(1, -1).split(',').map(item => item.trim());
            return items.every((item) => fn(item));
        }
        return false;
    },
    uri: (value: string) => {
        return fieldTypeValidator.string(value);
    },
    url: (value: string) => {
        return fieldTypeValidator.string(value);
    },
    vector2d: (value: string) => {
        return fieldTypeValidator.floatarray(value);
    },
    floatarray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.float, value);
    },
    integerarray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.integer, value);
    },
    boolarray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.boolean, value);
    },
    booleanarray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.boolean, value);
    },
    stringarray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.string, value);
    },
    timearray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.float, value);
    },
    colorarray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.color, value);
    },
    nodearray: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.node, value);
    },
    assocarray: (value: string) => {
        try {
            const obj = JSON.parse(value);
            return typeof obj === 'object' && !Array.isArray(obj);
        } catch (e) {
            return false;
        }
    },
    roassociativearray: (value: string) => {
        return fieldTypeValidator.assocarray(value);
    },
    roassocarray: (value: string) => {
        return fieldTypeValidator.assocarray(value);
    },
    array: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.str, value);
    },
    roarray: (value: string) => {
        return fieldTypeValidator.array(value);
    },
    rect2d: (value: string) => {
        return fieldTypeValidator.asArray(fieldTypeValidator.float, value);
    },
    rect2darray: (value: string) => {
        return fieldTypeValidator.asArrayOfArrays(fieldTypeValidator.rect2d, value);
    },
    rectanglearray: (value: string) => {
        return fieldTypeValidator.asArrayOfArrays(fieldTypeValidator.rect2d, value);
    },
    vector2darray: (value: string) => {
        return fieldTypeValidator.asArrayOfArrays(fieldTypeValidator.float, value);
    },
    assocarrayarray: (value: string) => {
        return fieldTypeValidator.asArrayOfArrays(fieldTypeValidator.assocarray, value);
    },
    roassocarrayarray: (value: string) => {
        return fieldTypeValidator.asArrayOfArrays(fieldTypeValidator.roassocarray, value);
    },
    roassociativearrayarray: (value: string) => {
        return fieldTypeValidator.asArrayOfArrays(fieldTypeValidator.roassociativearray, value);
    },
    asArrayOfArrays: (fn: Function, value: string) => {
        if (value.startsWith('[[') && value.endsWith(']]')) {
            const items = value.slice(1, -1).split('],[').map(item => item.replace(/^\[|\]$/g, '').trim());
            return items.every((item) => fieldTypeValidator.asArray(fn, `[${item}]`));
        }
        return false;
    },



}
export default fieldTypeValidator