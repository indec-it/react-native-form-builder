import {isNumber, isEmpty, toNumber} from 'lodash';

/**
 * Perform calculation and save it.
 * @param {Object} question Question's data.
 * @param {String} question.name The name of question field.
 * @param {Boolean} question.allowZero The name of question field.
 * @param {String|Number} value The new answer to be handled.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeNumber = ({name, allowZero}, value, onChange) => {
    if (isNumber(value)) {
        return onChange({[name]: value});
    }
    if (isEmpty(value)) {
        return onChange({[name]: undefined});
    }
    const parsedValue = toNumber(value);
    if (parsedValue === 0 && !allowZero) {
        return onChange({[name]: undefined});
    }
    return onChange({[name]: parsedValue});
};

export default handleChangeNumber;
