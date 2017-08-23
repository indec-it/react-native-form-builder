import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from './styles';

const handleChange = (value, callback, question) => callback({target: {name: question.name, value: !value}});

const Checkbox = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <Text>{question.number ? `${question.number}` : ''}</Text>
        <Text>{question.text}</Text>
        <CheckBox
            title={question.text}
            onPress={() => handleChange(answer, onChange, question)}
            checked={answer}
        />
    </View>
);

Checkbox.propTypes = {
    answer: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

Checkbox.defaultProps = {
    answer: null
};

export default Checkbox;
