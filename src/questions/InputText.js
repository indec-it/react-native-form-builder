/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const InputText = ({section, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <TextInput
            maxLength={question.maxLength}
            onChangeText={text => handleChange({[question.name]: text}, section.name, onChange)}
            value={section[question.name]}
        />
    </View>
);

InputText.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputText;
