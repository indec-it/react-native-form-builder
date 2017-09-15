import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import TextField from 'react-native-md-textinput';

import InfoTextBox from './InfoTextBox';
import QuestionText from './QuestionText';
import colors from './colors';
import styles from './styles';

const InputNumber = ({answer, question, onChange}) => (
    <View style={[styles.columnContainer, {paddingBottom: 0, paddingTop: 0}]}>
        {question.text && <QuestionText question={question}/>}
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
        <TextField
            max={question.max}
            maxLength={question.maxLength}
            min={question.min}
            keyboardType={'numeric'}
            value={answer !== null ? answer : ''}
            onChangeText={text => onChange({[question.name]: text})}
            label={question.floatingLabel ? question.floatingLabel : ''}
            highlightColor={colors.accent}
        />
        {question.textAfterInput && <Text>{question.textAfterInput}</Text>}
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
