/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';

const styles = StyleSheet.create({
    rowContainer: {
        paddingHorizontal: 4,
    }
});

/*
    inputText: 'Año',
    inputUnit: null,
    ignoreText: 'Ignorado',
    ignoreValue: 9,
    type: types.TEXT_WITH_IGNORE
*/

const InputTextWithIgnore = ({answer, question, onChange}) => {
    let inputTextValue;
    let inputDisabled = answer === question.ignoreValue;

    const changeCheckbox = (value, callback) => {
        let answerValue;
        value = !value;
        if (!!value) {
            inputTextValue = null;
            answerValue = question.ignoreValue;
        } else {
            answerValue = null;
        }
        return callback({target: {name: question.name, value: answerValue}});
    };

    const changeInput = (value, callback) => {
        return callback({target: {name: question.name, value}});
    };

    return (
        <View style={styles.rowContainer}>
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
            <View>
                <Text>{question.inputText}</Text>
                {inputDisabled
                    ? <Text>(Deshabilitado)</Text>
                    : <TextInput
                        value={answer}
                        onChangeText={text => changeInput(text, onChange)}
                    />
                }
                {question.inputUnit && <Text>{question.inputUnit}</Text>}
            </View>
            <View>
                <Text>{question.ignoreText}</Text>
                <CheckBox
                    style={{width: 20}}
                    onPress={() => changeCheckbox(answer, onChange)}
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
