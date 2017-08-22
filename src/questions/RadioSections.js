import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (value, callback) => callback({target: {name: question.name, value}});

const RadioSections = ({answer, question, onChange}) => (
    <View style={styles.radioSections.rowContainer}>
        <QuestionText question={question}/>
        {question.options.map(option => (<View>
                {option.section
                    ? <Text style={styles.radioSections.sectionSubTitle}>{option.section}</Text>
                    : <CheckBox
                        key={option.value}
                        title={option.label}
                        checkedIcon='dot-circle-o'
                        onPress={() => handleChange(option.value, onChange)}
                        uncheckedIcon='circle-o'
                        checked={answer === option.value}
                    />
                }
            </View>)
        )}
    </View>
);

RadioSections.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

RadioSections.defaultProps = {
    answer: null
};

export default RadioSections;
