import {includes, last} from 'lodash';

import handleChangeNumber from './handleChangeNumber';

/**
 * Handle text of inputs.
 * @param {Object} question Question's data.
 * @param {String|Number} value The new answer to be handled.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeDecimalNumber = (question, value, onChange) => {
    /**
     * In this case, the 'onChange' does not propagate the 'value'.
     * Because, for example, if the 'value' is '2.' when applied
     * 'toNumber', the character '.' is deleted. Only if it's
     * are the last character of the 'value'.
     * */
    if (last(value) !== '.' && !includes(value, ',')) {
        handleChangeNumber(question, value, onChange);
    }
};

export default handleChangeDecimalNumber;
