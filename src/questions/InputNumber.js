import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';
import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const InputNumber = ({section, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <TextInput
            max={question.max}
            maxLength={question.maxLength}
            min={question.min}
            keyboardType={'numeric'}
            value={section[question.name]}
            onChangeText={text => handleChange({[question.name]: text}, section.name, onChange)}
        />
    </View>
);

InputNumber.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputNumber;
