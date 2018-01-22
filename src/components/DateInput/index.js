import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const DateInput = ({answer, question, onChange, style, badgeStyle, textStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge question={question} style={textStyle} badgeStyle={badgeStyle}/>}
            <DatePicker
                style={styles.datePicker}
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
};

DateInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    badgeStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

DateInput.defaultProps = {
    answer: null,
    style: null,
    badgeStyle: null,
    textStyle: null
};

export default DateInput;
