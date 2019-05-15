import {split, join} from 'lodash';

import handleChangeNumber from './handleChangeNumber';

/**
 * Handles inputs and performs the conversion to decimal.
 * @param {Object} question Question's data.
 * @param {String|Number} value The new answer to be handled.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeIntNumber = (question, value, onChange) => handleChangeNumber(
    question, join(split(value, '.'), ''), onChange
);

export default handleChangeIntNumber;
