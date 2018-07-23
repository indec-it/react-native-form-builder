import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue, handleChangeText} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';
import {types} from '../../enums';

const TextArea = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <TextInput
                style={computedStyles.input}
                value={getInputValue(answer)}
                onChangeText={text => handleChangeText(question, text, onChange)}
                autoFocus={question.autoFocus}
                maxLength={question.maxLength}
                keyboardType="default"
                multiline
                numberOfLines={question.numberOfLines}
                disabled={disabled}
            />
            {question.textAfterInput &&
            <Text style={computedStyles.component.textAfterInput}>
                {question.textAfterInput}
            </Text>}
        </View>
    );
};

TextArea.displayName = types.TEXT_AREA;

TextArea.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string,
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

TextArea.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default TextArea;
