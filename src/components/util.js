import {isNaN, isNil, mapKeys, toString} from 'lodash';

export default class Utilities {
    static getInputValue(answer) {
        return isNaN(answer) || isNil(answer) ? '' : toString(answer);
    }

    static handleChange(name, value, change, parser) {
        return change({
            [name]: parser ? parser(value) : value
        });
    }

    static setStyles(defaultStyle, customStyle) {
        if (!customStyle) {
            return defaultStyle;
        }

        const style = {};
        mapKeys(defaultStyle, field => {
            style[field] = customStyle[field] || defaultStyle[field];
        });
        return style;
    }
}
