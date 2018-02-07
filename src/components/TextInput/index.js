import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue, handleChange} from '../../util';
import styles from './styles';

const TextInput = ({answer, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
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
                onChangeText={text => handleChange(question.name, text, onChange)}
                label={question.floatingLabel || ''}
                highlightColor={computedStyles.highlightColor}
            />
            {question.textAfterInput &&
            <Text style={computedStyles.component.textAfterInput}>
                {question.textAfterInput}
            </Text>}
        </View>
    );
};

TextInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string,
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

TextInput.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null
};

export default TextInput;
