/* eslint-disable lodash/prefer-lodash-method */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import styles from './styles';

const RadioSections = ({answer, question, onChange}) => (
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
                        onPress={() => onChange({[question.name]: option.value})}
                        uncheckedIcon="circle-o"
                        checked={answer === option.value}
                    />
                }
            </View>
        ))}
    </View>
);

RadioSections.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

RadioSections.defaultProps = {
    answer: null
};

export default RadioSections;
