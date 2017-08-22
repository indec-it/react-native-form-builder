/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChangeCheckbox = (value, callback) => {
    const isChecked = value === question.ignoreValue;
    value = !isChecked;
    const answerValue = value ? question.ignoreValue : null;
    return callback({target: {name: question.name, value: answerValue}});
};

const handleChangeInput = (value, callback) => callback({target: {name: question.name, value}});

const InputNumberWithIgnore = ({answer, question, onChange}) => {
    const inputDisabled = answer === question.ignoreValue;
    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            <View>
                <Text>{question.inputText}</Text>
                {inputDisabled
                    ? <Text>(Deshabilitado)</Text>
                    : <TextInput
                        max={question.max}
                        maxLength={question.maxLength}
                        min={question.min}
                        keyboardType={'numeric'}
                        value={answer}
                        onChangeText={text => handleChangeInput(text, onChange)}
                    />
                }
                {question.inputUnit && <Text>{question.inputUnit}</Text>}
            </View>
            <View>
                <Text>{question.ignoreText}</Text>
                <CheckBox
                    style={{width: 20}}
                    onPress={() => handleChangeCheckbox(answer, onChange)}
                    checked={answer === question.ignoreValue}
                />
            </View>
        </View>
    );
};

InputNumberWithIgnore.propTypes = {
    answer: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputNumberWithIgnore.defaultProps = {
    answer: null
};

export default InputNumberWithIgnore;
