import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Datepicker from 'react-datepicker';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import moment from 'moment';

import {TextWithBadge} from '..';
import commonStyles from '../commonStyles';
import styles from '../DatePicker/styles';

const DatePicker = ({
    answer, question, onChange, style, textWithBadgeStyle, dateFormat, timeFormat, disabled, showTimeSelect,
    showTimeSelectOnly, timeCaption
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Datepicker
                selected={moment(answer)}
                onChange={date => onChange(date)}
                dropdownMode="select"
                placeholderText={question.placeholder}
                dateFormat={dateFormat}
                timeFormat={timeFormat}
                minDate={question.minDate}
                maxDate={question.maxDate}
                showTimeSelect={showTimeSelect}
                showTimeSelectOnly={showTimeSelectOnly}
                timeCaption={timeCaption}
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
    timeFormat: PropTypes.string,
    timeCaption: PropTypes.string,
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    showTimeSelect: PropTypes.bool,
    showTimeSelectOnly: PropTypes.bool,
    disabled: PropTypes.bool
};

DatePicker.defaultProps = {
    answer: new Date(),
    style: null,
    textWithBadgeStyle: null,
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm',
    timeCaption: null,
    showTimeSelect: false,
    showTimeSelectOnly: false,
    disabled: false
};

export default DatePicker;
