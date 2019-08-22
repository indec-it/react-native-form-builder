import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue, handleChangeText} from '../../util';
import {types} from '../../enums';
import commonStyles from '../commonStyles';
import styles from './styles';

const TextInput = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled, ...props
}) => {
    const computedStyles = mergeStyles(styles, style);
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
                keyboardType="default"
                value={getInputValue(answer)}
                onChangeText={text => handleChangeText(question, text, onChange)}
                label={question.floatingLabel || ''}
                highlightColor={computedStyles.highlightColor}
                autoFocus={question.autoFocus}
                disabled={disabled}
                {...props}
            />
            {question.textAfterInput &&
            <Text style={computedStyles.component.textAfterInput}>
                {question.textAfterInput}
            </Text>}
        </View>
    );
};

TextInput.displayName = types.TEXT_INPUT;

TextInput.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string,
        maxLength: PropTypes.number,
        floatingLabel: PropTypes.string,
        autoFocus: PropTypes.bool,
        textAfterInput: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string,
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

TextInput.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default TextInput;
