import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const DateInput = ({answer, question, onChange, style, badgeStyle, textStyle, textBoxStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textStyle}
                badgeStyle={badgeStyle}
                textBoxStyle={textBoxStyle}
            />}
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
    style: Utilities.getStyleProps(),
    badgeStyle: Utilities.getStyleProps(),
    textStyle: Utilities.getStyleProps(),
    textBoxStyle: Utilities.getStyleProps(),
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

DateInput.defaultProps = {
    style: null,
    badgeStyle: null,
    textStyle: null,
    textBoxStyle: null,
    answer: null
};

export default DateInput;
