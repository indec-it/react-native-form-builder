import {last} from 'lodash';

import handleChangeNumber from './handleChangeNumber';

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
const handleChangeDecimalNumber = (question, value, onChange) => {
    const lastChar = last(value);
    if (lastChar !== '.' && lastChar !== ',') {
        /**
         * In this case, the 'onChange' does not propagate the 'parsedValue'.
         * Because, for example, if the 'value' is '2.' or '2,' when we apply
         * 'toNumber', the characters '.' and ',' are deleted. Only if these
         * are the 'lastChar' of our 'value'.
         * */
        handleChangeNumber(question, value, onChange);
    }
};

export default handleChangeDecimalNumber;
