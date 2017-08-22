/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (value, callback) => callback({target: {name: question.name, value}});

const InputText = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <TextInput
            value={answer}
            onChangeText={text => handleChange(text, onChange)}
        />
    </View>
);

InputText.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputText.defaultProps = {
    answer: null
};

export default InputText;
