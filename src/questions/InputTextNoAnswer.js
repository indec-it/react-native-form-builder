/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

const styles = StyleSheet.create({
    rowContainer: {
        paddingHorizontal: 4,
    }
});

const InputTextNoAnswer = ({answer, question, onChange}) => {

    const change = (value, callback) => callback({target: {name: question.name, value}});

    const setNoAnswer = (value, callback) => {
        callback({target: {name: question.name, value}});
        callback({target: {name: `${question.name}NoAnswer`, value: true}});
    };

    return (
        <View style={styles.rowContainer}>
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
            <TextInput
                value={answer}
                onChangeText={text => change(text, onChange)}
            />
            <Button
                title={question.buttonText}
                color={question.buttonColor}
                onPress={() => setNoAnswer(question.disableValue, onChange)}
            />
        </View>
    );
};

InputTextNoAnswer.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputTextNoAnswer.defaultProps = {
    answer: null
};

export default InputTextNoAnswer;
