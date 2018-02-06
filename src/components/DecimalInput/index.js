import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {toNumber} from 'lodash';

import {TextWithBadge} from '..';
import {getInputValue, handleChange} from '../../util';
import styles from './styles';

const DecimalInput = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.style.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <InputField
                inputStyle={computedStyles.component.style.field}
                wrapperStyle={computedStyles.component.style.wrapper}
                labelStyle={computedStyles.component.style.label}
                maxLength={question.maxLength}
                max={question.max}
                min={question.min}
                keyboardType="numeric"
                value={getInputValue(answer)}
                onChangeText={text => handleChange(question.name, text, onChange, toNumber)}
                label={question.floatingLabel || ''}
                highlightColor={computedStyles.component.highlightColor}
            />
            {question.textAfterInput &&
            <Text style={computedStyles.component.style.textAfterInput}>
                {question.textAfterInput}
            </Text>}
        </View>
    );
};

DecimalInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    }),
    answer: PropTypes.number
};

DecimalInput.defaultProps = {
    style: null,
    answer: null
};

export default DecimalInput;
