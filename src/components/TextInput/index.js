import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';

import TextWithBadge from '../TextWithBadge';
import styles from './styles';

const TextInput = ({answer, question, onChange}) => (
    <View style={styles.container}>
        {question.text && <TextWithBadge question={question}/>}
        <InputField
            inputStyle={styles.field}
            wrapperStyle={styles.wrapper}
            labelStyle={styles.label}
            maxLength={question.maxLength}
            keyboardType="default"
            value={answer !== null ? answer : ''}
            onChangeText={text => onChange({[question.name]: text})}
            label={question.floatingLabel ? question.floatingLabel : ''}
            highlightColor="#ff4281"
        />
        {question.textAfterInput && <Text>{question.textAfterInput}</Text>}
    </View>
);

TextInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string
};

TextInput.defaultProps = {
    answer: null
};

export default TextInput;
