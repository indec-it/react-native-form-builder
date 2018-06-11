import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Datepicker from 'react-native-datepicker';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChangeDate} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

const DatePicker = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    const dateFormat = question.format || 'DD/MM/YYYY HH:mm';
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.container}>
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
                onDateChange={date => handleChangeDate(question.name, date, dateFormat, onChange)}
                disabled={disabled}
            />
        </View>
    );
};

DatePicker.displayName = 'datePicker';

DatePicker.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

DatePicker.defaultProps = {
    answer: new Date(),
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default DatePicker;
