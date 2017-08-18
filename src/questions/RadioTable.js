/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Row, Col, Grid} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';

const styles = StyleSheet.create({
    rowContainer: {
        paddingHorizontal: 4
    }
});

const renderQuestionRow = (section, options, parentQuestionName, questionRow, onChange) => {
    const questionName = parentQuestionName + questionRow.name;
    const answer = section[questionName];
    const change = (value, callback) => callback({target: {name: questionName, value}});
    return (
        <Row>
            <Col>
                <Text>{questionRow.text}</Text>
            </Col>
            {options.map(option => (
                <Col>
                    <CheckBox
                        key={option.value}
                        checkedIcon='dot-circle-o'
                        onPress={() => change(option.value, onChange)}
                        uncheckedIcon='circle-o'
                        checked={answer === option.value}
                    />
                </Col>
            ))}
        </Row>
    )
};

const RadioTable = ({section, question, onChange}) => {
    return (
        <View style={styles.rowContainer}>
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
            <Grid>
                <Row>
                    <Col/>
                    {question.options.map(option => (
                        <Col>
                            <Text>{option.text}</Text>
                        </Col>
                    ))}
                </Row>
                {question.questions.map(questionRow => (
                    renderQuestionRow(section, question.options, question.name, questionRow, onChange)
                ))}
            </Grid>
        </View>
    );
};

RadioTable.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

RadioTable.defaultProps = {
    answer: null
};

export default RadioTable;
