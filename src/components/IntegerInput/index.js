import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue, handleEndEditingNumber, handleChangeIntNumber} from '../../util';
import {types} from '../../enums';
import commonStyles from '../commonStyles';

const IntegerInput = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(commonStyles.numberInput, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <InputField
                inputStyle={computedStyles.component.field}
                wrapperStyle={computedStyles.component.wrapper}
                labelStyle={computedStyles.component.label}
                maxLength={question.maxLength}
                keyboardType="numeric"
                value={getInputValue(answer)}
                onChangeText={text => handleChangeIntNumber(question, text, onChange)}
                onEndEditing={() => handleEndEditingNumber(question, answer, onChange)}
                label={question.label || ''}
                highlightColor={computedStyles.highlightColor}
                autoFocus={question.autoFocus}
                disabled={disabled}
            />
            {question.textAfterInput &&
            <Text style={computedStyles.component.textAfterInput}>
                {question.textAfterInput}
            </Text>}
        </View>
    );
};

IntegerInput.displayName = types.INTEGER_INPUT;

IntegerInput.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string,
        textAfterInput: PropTypes.string,
        maxLength: PropTypes.number,
        label: PropTypes.string,
        autoFocus: PropTypes.bool
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

IntegerInput.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default IntegerInput;

