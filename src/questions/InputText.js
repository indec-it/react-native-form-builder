/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    rowContainer: {
        paddingHorizontal: 4,
    }
});

const InputNumber = ({answer, question, onChange}) => {
    const change = (value, callback) => callback({target: {name: question.name, value}});
    return (
        <View style={styles.rowContainer}>
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
            <TextInput
                value={answer}
                onChangeText={text => change(text, onChange)}
            />
        </View>
    );
};

InputNumber.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputNumber.defaultProps = {
    answer: null
};

export default InputNumber;
