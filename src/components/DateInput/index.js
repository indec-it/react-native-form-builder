import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const DateInput = ({answer, question, onChange, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <TextWithBadge question={question}/>
        <DatePicker
            style={Utilities.setStyle(defaultStyles, style, 'datePicker')}
            date={answer}
            placeholder={question.placeholder}
            format={question.format}
            minDate={question.minDate}
            maxDate={question.maxDate}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={date => Utilities.handleChange(question.name, date, onChange)}
        />
    </View>
);

DateInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onChange: PropTypes.func.isRequired
};

DateInput.defaultProps = {
    answer: null,
    style: null
};

export default DateInput;
