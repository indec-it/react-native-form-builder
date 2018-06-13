import {size, toNumber} from 'lodash';

import isEmptyAnswer from './isEmptyAnswer';

/**
 * Handle inputs.
 * @param {Object} question Question's data.
 * @param {String} question.name The name of question field.
 * @param {Boolean} question.allowZero The name of question field.
 * @param {Number} question.max The max number can be answered.
 * @param {Number} question.min The min number can be answered.
 * @param {Number} question.maxLength The length of value.
 * @param {String} value The new answer to be handled.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeNumber = ({
    name, allowZero, max, min, maxLength
}, value, onChange) => {
    let newValue;
    if (maxLength && size(value) > maxLength) {
        newValue = value.substr(0, maxLength);
    }
    const parsedValue = toNumber(newValue || value);
    let answer;
    if (isEmptyAnswer(allowZero, value, parsedValue)) {
        answer = undefined;
    } else if (parsedValue < min) {
        answer = min;
    } else if (parsedValue > max) {
        answer = max;
    } else {
        answer = parsedValue;
    }
    onChange({[name]: answer});
};

export default handleChangeNumber;
