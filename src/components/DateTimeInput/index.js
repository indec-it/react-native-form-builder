import React from 'react';
import PropTypes from 'prop-types';
import {stylePropType} from '@indec/react-native-commons/util';

import DatePicker from '../DatePicker';
import {handleChangeDate} from '../../util';
import {types} from '../../enums';

const DateTimeInput = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const dateFormat = question.format || 'DD/MM/YYYY HH:mm';
    return (
        <DatePicker
            question={question}
            answer={answer}
            dateFormat={dateFormat}
            onChange={dateTime => handleChangeDate(question.name, dateTime, dateFormat, onChange)}
            textWithBadgeStyle={textWithBadgeStyle}
            style={style}
            mode="datetime"
            showTimeSelect
            disabled={disabled}
        />
    );
};

DateTimeInput.displayName = types.DATE_TIME_INPUT;

DateTimeInput.propTypes = {
    question: PropTypes.shape({
        format: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

DateTimeInput.defaultProps = {
    answer: new Date(),
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default DateTimeInput;
