/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';
import QuestionText from './QuestionText';
import styles from './styles';

const handleChangeCheckbox = (value, callback, question) => {
    const isChecked = value === question.ignoreValue;
    value = !isChecked;
    const answerValue = value ? question.ignoreValue : null;
    return callback({target: {name: question.name, value: answerValue}});
};

const handleChangeInput = (value, callback, question) => {
    return callback({target: {name: question.name, value}});
};

const InputTextWithIgnore = ({answer, question, onChange}) => {
    const inputDisabled = answer === question.ignoreValue;
    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            <View>
                <Text>{question.inputText}</Text>
                {inputDisabled
                    ? <Text>(Deshabilitado)</Text>
                    : <TextInput
                        value={answer}
                        onChangeText={text => handleChangeInput(text, onChange, question)}
                    />
                }
                {question.inputUnit && <Text>{question.inputUnit}</Text>}
            </View>
            <View>
                <Text>{question.ignoreText}</Text>
                <CheckBox
                    style={{width: 20}}
                    onPress={() => handleChangeCheckbox(answer, onChange, question)}
                    checked={answer === question.ignoreValue}
                />
            </View>
        </View>
    );
};

InputTextWithIgnore.propTypes = {
    answer: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputTextWithIgnore.defaultProps = {
    answer: null
};

export default InputTextWithIgnore;
