import React from 'react';
import PropTypes from 'prop-types';
import {stylePropType} from '@indec/react-native-commons/util';

import DatePicker from '../DatePicker';
import {handleChangeDate} from '../../util';
import {types} from '../../enums';

const DateInput = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const dateFormat = question.format || 'DD/MM/YYYY';
    return (
        <DatePicker
            question={question}
            answer={answer}
            dateFormat={dateFormat}
            onChange={date => handleChangeDate(question.name, date, dateFormat, onChange)}
            textWithBadgeStyle={textWithBadgeStyle}
            style={style}
            disabled={disabled}
        />
    );
};

DateInput.displayName = types.DATE_INPUT;

DateInput.propTypes = {
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

DateInput.defaultProps = {
    answer: new Date(),
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default DateInput;
