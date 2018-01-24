import PropTypes from 'prop-types';
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
        mapKeys(defaultStyle, (value, field) => {
            style[field] = customStyle[field] || value;
        });
        return style;
    }

    static getStyleProps() {
        return PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ]);
    }
}
