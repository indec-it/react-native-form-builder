import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {toNumber, toString} from 'lodash';

import TextWithBadge from '../TextWithBadge';
import styles from './styles';

const DecimalInput = ({answer, question, onChange}) => (
    <View style={styles.container}>
        {question.text && <TextWithBadge question={question}/>}
        <InputField
            inputStyle={styles.field}
            wrapperStyle={styles.wrapper}
            labelStyle={styles.label}
            max={question.max}
            maxLength={question.maxLength}
            min={question.min}
            keyboardType="numeric"
            value={answer !== null ? toString(answer) : ''}
            onChangeText={num => onChange({[question.name]: toNumber(num)})}
            label={question.floatingLabel ? question.floatingLabel : ''}
            highlightColor="#ff4281"
        />
        {question.textAfterInput && <Text>{question.textAfterInput}</Text>}
    </View>
);

DecimalInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.number
};

DecimalInput.defaultProps = {
    answer: null
};

export default DecimalInput;
