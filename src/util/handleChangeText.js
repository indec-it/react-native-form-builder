import {isEmpty, replace} from 'lodash';

/**
 * Invoke question's RegExp to format the value.
 * @param {String} value The new answer to be handled.
 * @param {RegExp|String} regex The RegExp for matching text with a pattern.
 */
const formatValue = (value, regex) => (regex ? replace(value, new RegExp(regex), '') : value);

/**
 * Handle text of inputs, and invoke RegExp to format a final value.
 * @param {Object} question Question's data.
 * @param {String} question.name The name of question field.
 * @param {RegExp|String} question.regex The RegExp for matching text with a pattern.
 * @param {String} value The new answer to be handled.
 * @param {Function} onChange Handle when the answer has changed.
 */
const handleChangeText = ({name, regex}, value, onChange) => onChange({
    [name]: !isEmpty(value) ? formatValue(value, regex) : undefined
});

export default handleChangeText;
