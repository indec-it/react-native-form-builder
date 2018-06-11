import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Datepicker from 'react-native-datepicker';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

const TimePicker = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
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
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                onDateChange={date => handleChange(question.name, date, onChange)}
                disabled={disabled}
                mode="time"
            />
        </View>
    );
};

TimePicker.displayName = 'timePicker';

TimePicker.propTypes = {
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

TimePicker.defaultProps = {
    answer: new Date(),
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default TimePicker;
