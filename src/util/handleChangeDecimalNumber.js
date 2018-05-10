import {last, toNumber} from 'lodash';

import isEmptyAnswer from './isEmptyAnswer';

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
    const parsedValue = toNumber(value);
    const lastChar = last(value);


    if (lastChar === '.' || lastChar === ',') {
        /**
         * In this case, the 'onChange' does not propagate the 'parsedValue'.
         * Because, for example, if the 'value' is '2.' or '2,' when we apply
         * 'toNumber', the characters '.' and ',' are deleted. Only if these
         * are the 'lastChar' of our 'value'.
         * */
        return null;
    }
    if (parsedValue < min) {
        return onChange({[name]: min});
    }
    if (parsedValue > max) {
        return onChange({[name]: max});
    }
    if (isEmptyAnswer(allowZero, value, parsedValue)) {
        return onChange({[name]: undefined});
    }
    return onChange({[name]: parsedValue});
};

export default handleChangeDecimalNumber;
