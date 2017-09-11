/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';

import QuestionText from './QuestionText';
import styles from './styles';

const InputText = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <TextInput
            maxLength={question.maxLength}
            onChangeText={text => onChange({[question.name]: text})}
            value={answer}
            style={styles.testText}
        />
    </View>
);

InputText.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string
};

InputText.defaultProps = {
    answer: null
};

export default InputText;
