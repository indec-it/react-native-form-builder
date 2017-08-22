/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import QuestionText from './QuestionText';

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        paddingHorizontal: 4
    },
    sectionSubTitle: {
        fontWeight: 'bold',
        padding: 10
    }
});

const RadioSections = ({answer, question, onChange}) => {
    const change = (value, callback) => callback({target: {name: question.name, value}});
    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            {question.options.map(option => (<View>
                    {option.section
                        ? <Text style={styles.sectionSubTitle}>{option.section}</Text>
                        : <CheckBox
                            key={option.value}
                            title={option.label}
                            checkedIcon='dot-circle-o'
                            onPress={() => change(option.value, onChange)}
                            uncheckedIcon='circle-o'
                            checked={answer === option.value}
                        />
                    }
                </View>)
            )}
        </View>
    );
};

RadioSections.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

RadioSections.defaultProps = {
    answer: null
};

export default RadioSections;
