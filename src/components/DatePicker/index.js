import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Datepicker from 'react-native-datepicker';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import commonStyles from '../commonStyles';
import styles from './styles';

const DatePicker = ({
    answer, question, onChange, style, textWithBadgeStyle, dateFormat, mode, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Datepicker
                style={computedStyles.datePicker}
                date={new Date(answer)}
                placeholder={question.placeholder}
                format={dateFormat}
                minDate={question.minDate}
                maxDate={question.maxDate}
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                onDateChange={date => onChange(date)}
                mode={mode}
                disabled={disabled}
            />
        </View>
    );
};

DatePicker.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string,
        placeholder: PropTypes.string,
        minDate: PropTypes.string,
        maxDate: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string
    ]),
    dateFormat: PropTypes.string,
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool,
    mode: PropTypes.string
};

DatePicker.defaultProps = {
    answer: new Date(),
    style: null,
    dateFormat: 'DD/MM/YYYY',
    mode: 'date',
    textWithBadgeStyle: null,
    disabled: false
};

export default DatePicker;
