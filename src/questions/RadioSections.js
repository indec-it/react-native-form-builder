import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const RadioSections = ({section, question, onChange}) => (
    <View style={styles.radioSections.rowContainer}>
        <QuestionText question={question}/>
        {question.options.map(option => (
            <View>
                {option.section
                    ? <Text style={styles.radioSections.sectionSubTitle}>{option.section}</Text>
                    : <CheckBox
                        key={option.value}
                        title={option.label}
                        checkedIcon="dot-circle-o"
                        onPress={() => handleChange({[question.name]: option.value}, section.name, onChange)}
                        uncheckedIcon="circle-o"
                        checked={section[question.name] === option.value}
                    />
                }
            </View>
        ))}
    </View>
);

RadioSections.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default RadioSections;
