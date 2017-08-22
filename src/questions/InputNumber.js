import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View} from 'react-native';
import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (value, callback) => callback({target: {name: question.name, value}});

const InputNumber = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <TextInput
            max={question.max}
            maxLength={question.maxLength}
            min={question.min}
            keyboardType={'numeric'}
            value={answer}
            onChangeText={text => handleChange(text, onChange)}
        />
    </View>
);

InputNumber.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputNumber.defaultProps = {
    answer: null
};

export default InputNumber;
