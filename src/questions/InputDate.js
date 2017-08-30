/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const InputDate = ({section, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <DatePicker
            style={{width: 200}}
            date={section[question.name]}
            placeholder={question.placeholder}
            format={question.format}
            minDate={question.minDate}
            maxDate={question.maxDate}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={date => handleChange({[question.name]: date}, section.name, onChange)}
        />
    </View>
);

InputDate.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputDate;
