import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const DateInput = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <DatePicker
                style={computedStyles.component.datePicker}
                date={answer}
                placeholder={question.placeholder}
                format={question.format}
                minDate={question.minDate}
                maxDate={question.maxDate}
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                onDateChange={date => handleChange(question.name, date, onChange)}
            />
        </View>
    );
};

DateInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    }),
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

DateInput.defaultProps = {
    style: null,
    answer: null
};

export default DateInput;
