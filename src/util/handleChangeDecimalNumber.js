import {includes, isEmpty, isNaN, last, size, split, toNumber} from 'lodash';

/**
 * Handle text of inputs and perform to decimal conversion.
 * @param {Object} question Question's data.
 * @param {String} question.name The name of question field.
 * @param {Boolean} question.allowZero The name of question field.
 * @param {Number} question.max The max number can be answered.
 * @param {Number} question.min The min number can be answered.
 * @param {String|Number} value The new answer to be handled.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeDecimalNumber = ({name, allowZero, max, min}, value, onChange) => {
    const splittedValue = split(value, '.');
    const parsedValue = toNumber(value);

    if (includes(value, '.') && size(splittedValue) === 2) {
        return onChange({
            [name]: isEmpty(last(splittedValue)) ? value : parsedValue
        });
    }
    if (isEmpty(value) || isNaN(parsedValue)) {
        return onChange({[name]: undefined});
    }
    if (parsedValue < min) {
        return onChange({[name]: min});
    }
    if (parsedValue > max) {
        return onChange({[name]: max});
    }
    if (parsedValue === 0 && !allowZero) {
        return onChange({[name]: undefined});
    }
    return onChange({[name]: parsedValue});
};

export default handleChangeDecimalNumber;
