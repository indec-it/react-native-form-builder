import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Row, Col, Grid} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (value, callback) => callback({target: {name: questionName, value}});

const renderQuestionRow = (section, options, parentQuestionName, questionRow, onChange) => {
    const questionName = parentQuestionName + questionRow.name;
    const answer = section[questionName];
    return (
        <Row>
            <Col size={4}>
                <Text style={{paddingTop: 15}}>{questionRow.text}</Text>
            </Col>
            {options.map(option => (
                <Col>
                    <CheckBox
                        key={option.value}
                        containerStyle={{borderWidth: 0, backgroundColor: null}}
                        checkedIcon='dot-circle-o'
                        onPress={() => handleChange(option.value, onChange)}
                        uncheckedIcon='circle-o'
                        checked={answer === option.value}
                    />
                </Col>)
            )}
        </Row>
    )
};

const RadioTable = ({section, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <Grid>
            <Row>
                <Col size={4}/>
                {question.options.map(option => (
                    <Col>
                        <Text>
                            {option.text}
                        </Text>
                    </Col>
                ))}
            </Row>
            {question.questions.map(questionRow => (
                renderQuestionRow(section, question.options, question.name, questionRow, onChange)
            ))}
        </Grid>
    </View>
);

RadioTable.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

RadioTable.defaultProps = {
    answer: null
};

export default RadioTable;
