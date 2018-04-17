import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import TextWithBadge from '../TextWithBadge';
import {handleChange} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

/**
 * Perform calculation and save it.
 * @param {Object} section Answers of the chapter.
 * @param {Object} question Question's data.
 * @param {String} question.name The name of question field.
 * @param {Function} question.calc A function that generates the field value.
 * @param {Function} onChange Handle when the result has changed.
 * @returns {Number} Returns result of the calculation.
 */
const getResult = (section, {name, calc}, onChange) => {
    const result = calc(section);
    if (result !== section[name]) {
        handleChange(name, result, onChange);
    }
    return result;
};

const Calc = ({section, question, onChange, style, textWithBadgeStyle, disabled}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.container}>
            {question.text &&
            <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            {!disabled &&
            <Text style={computedStyles.calcLabel}>
                {getResult(section, question, onChange)}
            </Text>}
            {question.textAfterCalc &&
            <Text style={computedStyles.textAfterCalc}>
                {question.textAfterCalc}
            </Text>}
        </View>
    );
};

Calc.displayName = 'calc';

Calc.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({
        name: PropTypes.string.isRequired,
        calc: PropTypes.func.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

Calc.defaultProps = {
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default Calc;
