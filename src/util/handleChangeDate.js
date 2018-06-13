import moment from 'moment';
import {isEmpty} from 'lodash';

/**
 * Handles inputs and performs the conversion to date.
 * @param {String} name The name of the question field.
 * @param {String|Number} value The new answer to be handled.
 * @param {String} format The format to parse the value to date.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeDate = (name, value, format, onChange) => {
    let answer;
    if (!isEmpty(value)) {
        const date = moment(value, format).toDate();
        if (date.getTime()) {
            answer = date;
        }
    }
    onChange({[name]: answer});
};

export default handleChangeDate;
