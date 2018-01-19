import {isNaN, isNil, toString} from 'lodash';

export default class Utilities {
    static getInputValue(answer) {
        return isNaN(answer) || isNil(answer) ? '' : toString(answer);
    }

    static handleChange(name, value, change, parser) {
        return change({
            [name]: parser ? parser(value) : value
        });
    }

    static isChecked(answer, value) {
        return answer === value;
    }

    static setStyle(defaultStyle, customStyle, name) {
        return customStyle && customStyle[name] ? customStyle[name] : defaultStyle[name];
    }
}
