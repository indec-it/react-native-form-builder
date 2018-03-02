import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue, numericHandleChange} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

const DecimalInput = ({answer, question, onChange, style, textWithBadgeStyle, disabled}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <InputField
                inputStyle={computedStyles.component.field}
                wrapperStyle={computedStyles.component.wrapper}
                labelStyle={computedStyles.component.label}
                maxLength={question.maxLength}
                max={question.max}
                min={question.min}
                keyboardType="numeric"
                value={getInputValue(answer)}
                onChangeText={text => numericHandleChange(question.name, text, onChange)}
                label={question.floatingLabel || ''}
                highlightColor={computedStyles.highlightColor}
                disabled={disabled}
            />
            {question.textAfterInput &&
            <Text style={computedStyles.component.textAfterInput}>
                {question.textAfterInput}
            </Text>}
        </View>
    );
};

DecimalInput.displayName = 'decimalInput';

DecimalInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

DecimalInput.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default DecimalInput;
