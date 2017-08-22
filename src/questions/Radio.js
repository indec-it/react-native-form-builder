import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import InfoTextBox from './InfoTextBox';
import styles from './styles';

const handleChange = (value, callback, question) => callback({target: {name: question.name, value}});

const Radio = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
        {question.options.map(option => (
            <CheckBox
                key={option.value}
                title={option.label}
                checkedIcon='dot-circle-o'
                onPress={() => handleChange(option.value, onChange, question)}
                uncheckedIcon='circle-o'
                checked={answer === option.value}
            />
        ))}
    </View>
);

Radio.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

Radio.defaultProps = {
    answer: null
};

export default Radio;
