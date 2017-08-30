import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Row, Col, Grid, CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const renderRow = (section, options, parentQuestionName, question, onChange) => {
    const questionName = parentQuestionName + question.name;
    const answer = section[questionName];
    // TODO add key attribute to Row component for better loop render.
    return (
        <Row>
            <Col size={4}>
                <Text style={{paddingTop: 15}}>{question.text}</Text>
            </Col>
            {options.map(option => (
                <Col>
                    <CheckBox
                        key={option.value}
                        containerStyle={{borderWidth: 0, backgroundColor: null}}
                        checkedIcon="dot-circle-o"
                        onPress={() => handleChange({[questionName]: option.value}, section.name, onChange)}
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
            {question.questions.map(questionRow =>
                renderRow(section, question.options, question.name, questionRow, onChange)
            )}
        </Grid>
    </View>
);

RadioTable.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default RadioTable;
