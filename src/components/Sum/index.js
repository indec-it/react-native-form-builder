import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {isEmpty, filter, toNumber, isNil, sum} from 'lodash';

import TextWithBadge from '../TextWithBadge';
import {handleChange} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

/**
 * Perform sum and save it.
 * @param {Object} section Answers of the chapter.
 * @param {Object} question Question's data.
 * @param {String} question.name The name of question field.
 * @param {Array<String>} question.fieldsToAdd Answers to sum.
 * @param {Function} onChange Handle when the result has changed.
 * @returns {Number} Returns result of the sum.
 */
const getSum = (section, {name, fieldsToAdd}, onChange) => {
    const addends = filter(
        fieldsToAdd,
        field => !isNil(section[field])
    ).map(
        field => toNumber(section[field])
    );
    const result = sum(addends);
    if (section[name] !== result && !isEmpty(addends)) {
        handleChange(name, result, onChange);
    }
    return result;
};

const Sum = ({
    section, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.container}>
            {question.text &&
            <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            {!disabled &&
            <Text style={computedStyles.sumLabel}>
                {getSum(section, question, onChange)}
            </Text>}
        </View>
    );
};

Sum.displayName = 'sum';

Sum.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({
        name: PropTypes.string.isRequired,
        fieldsToAdd: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

Sum.defaultProps = {
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default Sum;
