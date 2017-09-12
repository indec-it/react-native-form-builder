import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';

import InfoTextBox from './InfoTextBox';
import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (value, callback, question) => callback({target: {name: question.name, value}});

const InputNumber = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
        <TextInput
            max={question.max}
            maxLength={question.maxLength}
            min={question.min}
            keyboardType={'numeric'}
            value={answer}
            onChangeText={text => handleChange(text, onChange, question)}
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
