import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const Checkbox = ({section, question, onChange}) => (
    <View style={styles.rowContainer}>
        <Text>{question.number ? `${question.number}` : ''}</Text>
        <Text>{question.text}</Text>
        <CheckBox
            title={question.text}
            onPress={() => handleChange({[question.name]: !section[question.name]}, section.name, onChange)}
            checked={section[question.name]}
        />
    </View>
);

Checkbox.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
