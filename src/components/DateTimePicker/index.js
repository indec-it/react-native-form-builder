import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Datepicker from 'react-native-datepicker';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

const DateTimePicker = ({answer, question, onChange, style, textWithBadgeStyle, disabled}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Datepicker
                style={computedStyles.datePicker}
                date={answer}
                placeholder={question.placeholder}
                format={question.format}
                minDate={question.minDate}
                maxDate={question.maxDate}
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                onDateChange={date => handleChange(question.name, date, onChange)}
                disabled={disabled}
                mode="datetime"
            />
        </View>
    );
};

DateTimePicker.displayName = 'dateTimePicker';

DateTimePicker.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

DateTimePicker.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default DateTimePicker;
