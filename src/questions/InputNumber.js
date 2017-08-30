import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';
import QuestionText from './QuestionText';
import styles from './styles';

const InputNumber = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <TextInput
            max={question.max}
            maxLength={question.maxLength}
            min={question.min}
            keyboardType={'numeric'}
            value={answer}
            onChangeText={text => onChange({[question.name]: text})}
        />
    </View>
);

InputNumber.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string
};

InputNumber.defaultProps = {
    answer: null
};

export default InputNumber;
