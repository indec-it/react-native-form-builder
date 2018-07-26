import {size, toNumber} from 'lodash';

import {isEmptyNumberAnswer} from '.';

/**
 * Handle inputs.
 * @param {Object} question Question's data.
 * @param {String} question.name The name of question field.
 * @param {Boolean} question.allowZero The name of question field.
 * @param {Number} question.maxLength The length of value.
 * @param {String} value The new answer to be handled.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeNumber = ({name, allowZero, maxLength}, value, onChange) => {
    let newValue;
    if (maxLength && size(value) > maxLength) {
        newValue = value.substr(0, maxLength);
    }
    const parsedValue = toNumber(newValue || value);
    onChange({[name]: isEmptyNumberAnswer(allowZero, value, parsedValue) ? undefined : parsedValue});
};

export default handleChangeNumber;
