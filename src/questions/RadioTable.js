import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Row, Col, Grid} from 'react-bootstrap';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (value, callback, questionName) => callback({target: {name: questionName, value}});

const renderRow = (section, options, parentQuestionName, question, onChange) => {
    const questionName = parentQuestionName + question.name;
    const answer = section[questionName];
    // TODO add key attribute to Row component for better loop render.
    return (
        <Row>
            <Col sm={4}>
                <Text style={{paddingTop: 15}}>{question.text}</Text>
            </Col>
            {options.map(option => (
                <Col sm={1}>
                    <CheckBox
                        key={option.value}
                        containerStyle={{borderWidth: 0, backgroundColor: null}}
                        checkedIcon="dot-circle-o"
                        onPress={() => handleChange(option.value, onChange, questionName)}
                        uncheckedIcon="circle-o"
                        checked={answer === option.value}
                    />
                </Col>
            ))}
        </Row>
    );
};

const RadioTable = ({section, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <Row>
            <Col sm={4}>
            </Col>
            {question.options.map(option => (
                <Col sm={1}>
                    <Text>
                        {option.text}
                    </Text>
                </Col>
            ))}
        </Row>
        {question.questions.map(questionRow =>
            renderRow(section, question.options, question.name, questionRow, onChange)
        )}
    </View>
);

RadioTable.propTypes = {
    onChange: PropTypes.func.isRequired,
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired
};

export default RadioTable;
