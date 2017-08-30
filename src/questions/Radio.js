import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import InfoTextBox from './InfoTextBox';
import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const Radio = ({section, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
        {question.options.map(option => (
            <CheckBox
                key={option.value}
                title={option.label}
                checkedIcon="dot-circle-o"
                onPress={() => handleChange({[question.name]: option.value}, section.name, onChange)}
                uncheckedIcon="circle-o"
                checked={section[question.name] === option.value}
            />
        ))}
    </View>
);

Radio.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Radio;
