/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';

import styles from './styles';

const handleChange = (question, value, callback) => callback({target: {name: question.name, value}});

const InputDate = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <Text>{question.number ? `${question.number}` : ''}</Text>
        <Text>{question.text}</Text>
        <DatePicker
            style={{width: 200}}
            date={answer}
            placeholder={question.placeholder}
            format={question.format}
            minDate={question.minDate}
            maxDate={question.maxDate}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={date => handleChange(question, date, onChange)}
        />
    </View>
);

InputDate.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputDate.defaultProps = {
    answer: null
};

export default InputDate;
