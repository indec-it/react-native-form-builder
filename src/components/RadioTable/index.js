import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Row, Col, Grid} from '@indec/react-native-commons';

import TextWithBadge from '../TextWithBadge';
import styles from './styles';

const renderRow = (section, options, parentQuestionName, question, onChange) => {
    const questionName = parentQuestionName + question.name;
    const answer = section[questionName];
    // TODO add key attribute to Row component for better loop render.
    return (
        <Row>
            <Col size={4}>
                <Text style={styles.rowLabel}>{question.text}</Text>
            </Col>
            {options.map(option => (
                <Col style={styles.column}>
                    <CheckBox
                        key={option.value}
                        containerStyle={styles.checkBoxContainer}
                        checkedIcon="dot-circle-o"
                        onPress={() => onChange({[questionName]: option.value})}
                        uncheckedIcon="circle-o"
                        checked={answer === option.value}
                    />
                </Col>
            ))}
        </Row>
    );
};

const RadioTable = ({section, question, onChange}) => (
    <View style={styles.container}>
        <TextWithBadge question={question}/>
        <Grid>
            <Row>
                <Col size={4}>
                    {question.options.map(option => (
                        <Col style={styles.column}>
                            <Text>
                                {option.text}
                            </Text>
                        </Col>
                    ))}
                </Col>
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
