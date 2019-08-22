import React from 'react';
import PropTypes from 'prop-types';
import {stylePropType} from '@indec/react-native-commons/util';

import DatePicker from '../DatePicker';
import {handleChangeDate} from '../../util';
import {types} from '../../enums';

const TimeInput = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const timeFormat = question.format || 'HH:mm';
    return (
        <DatePicker
            question={question}
            answer={answer}
            onChange={date => handleChangeDate(question.name, date, timeFormat, onChange)}
            textWithBadgeStyle={textWithBadgeStyle}
            dateFormat={timeFormat}
            timeFormat={timeFormat}
            style={style}
            mode="time"
            timeCaption="Time"
            showTimeSelect
            showTimeSelectOnly
            disabled={disabled}
        />
    );
};

TimeInput.displayName = types.TIME_INPUT;

TimeInput.propTypes = {
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

TimeInput.defaultProps = {
    answer: new Date(),
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default TimeInput;
