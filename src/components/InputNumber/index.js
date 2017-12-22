import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {toNumber, toString} from 'lodash';

import InfoTextBox from '../InfoTextBox';
import QuestionText from '../Text';
import styles from './styles';

const InputNumber = ({answer, question, onChange}) => (
    <View style={styles.container}>
        {question.text && <QuestionText question={question}/>}
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
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

InputNumber.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.number
};

InputNumber.defaultProps = {
    answer: null
};

export default InputNumber;
