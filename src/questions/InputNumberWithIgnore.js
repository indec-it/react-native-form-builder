import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {toNumber} from 'lodash';
import InputField from '@indec/react-native-md-textinput';

import QuestionText from './QuestionText';
import colors from './colors';
import styles from './styles';

const InputNumberWithIgnore = ({answer, question, onChange}) => {
    const inputDisabled = answer === question.ignoreValue;
    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            <View>
                <Text>{question.inputText}</Text>
                {inputDisabled ? <Text>(Deshabilitado)</Text>
                    : <InputField
                        inputStyle={styles.input.field}
                        wrapperStyle={styles.input.wrapper}
                        labelStyle={styles.input.label}
                        max={question.max}
                        maxLength={question.maxLength}
                        min={question.min}
                        keyboardType="numeric"
                        value={answer !== null ? answer : ''}
                        onChangeText={num => onChange({[question.name]: toNumber(num)})}
                        label={question.floatingLabel ? question.floatingLabel : ''}
                        highlightColor={colors.accent}
                    />
                }
                {question.inputUnit && <Text>{question.inputUnit}</Text>}
            </View>
            <View>
                <Text>{question.ignoreText}</Text>
                <CheckBox
                    style={{width: 20}}
                    onPress={() => onChange({
                        [question.name]: answer !== question.ignoreValue ? question.ignoreValue : null
                    })}
                    checked={answer === question.ignoreValue}
                />
            </View>
        </View>
    );
};

InputNumberWithIgnore.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.bool
};

InputNumberWithIgnore.defaultProps = {
    answer: null
};

export default InputNumberWithIgnore;
