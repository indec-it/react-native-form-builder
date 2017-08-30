import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from './styles';

const Checkbox = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <Text>{question.number ? `${question.number}` : ''}</Text>
        <Text>{question.text}</Text>
        <CheckBox
            title={question.text}
            onPress={() => onChange({[question.name]: !answer})}
            checked={answer}
        />
    </View>
);

Checkbox.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.bool
};

Checkbox.defaultProps = {
    answer: null
};

export default Checkbox;
