import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {toNumber} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const DecimalInput = ({answer, question, onChange, style, badgeStyle, textStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge question={question} style={textStyle} badgeStyle={badgeStyle}/>}
            <InputField
                inputStyle={styles.field}
                wrapperStyle={styles.wrapper}
                labelStyle={styles.label}
                max={question.max}
                maxLength={question.maxLength}
                min={question.min}
                keyboardType="numeric"
                value={Utilities.getInputValue(answer)}
                onChangeText={text => Utilities.handleChange(question.name, text, onChange, toNumber)}
                label={question.floatingLabel || ''}
                highlightColor="#ff4281"
            />
            {question.textAfterInput &&
            <Text style={styles.textAfterInput}>
                {question.textAfterInput}
            </Text>}
        </View>
    );
};

DecimalInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    badgeStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    answer: PropTypes.number
};

DecimalInput.defaultProps = {
    answer: null,
    style: null,
    badgeStyle: null,
    textStyle: null
};

export default DecimalInput;
