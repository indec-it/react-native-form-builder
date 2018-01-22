import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Row, Col, Grid} from '@indec/react-native-commons';
import {isEqual} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const setRowQuestion = (question, section, rowQuestion, onChange, style) => {
    const questionName = question.name + rowQuestion.name;
    const questionValue = section[questionName];
    return (
        <Row key={questionName}>
            <Col size={4}>
                <Text style={style.rowLabel}>
                    {question.text}
                </Text>
            </Col>
            {question.options.map(option => (
                <Col style={style.column}>
                    <CheckBox
                        key={option.value}
                        containerStyle={style.checkBoxContainer}
                        checkedIcon="dot-circle-o"
                        onPress={() => Utilities.handleChange(questionName, option.value, onChange)}
                        uncheckedIcon="circle-o"
                        checked={isEqual(questionValue, option.value)}
                    />
                </Col>
            ))}
        </Row>
    );
};

const RadioTable = ({section, question, onChange, style, badgeStyle, textStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge question={question} style={textStyle} badgeStyle={badgeStyle}/>}
            <Grid>
                <Row>
                    <Col size={4}>
                        {question.options.map(option => (
                            <Col
                                key={option.text}
                                style={styles.column}
                            >
                                <Text>
                                    {option.text}
                                </Text>
                            </Col>
                        ))}
                    </Col>
                </Row>
                {question.questions.map(rowQuestion => (
                    setRowQuestion(question, section, rowQuestion, onChange, styles)
                ))}
            </Grid>
        </View>
    );
};

RadioTable.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    badgeStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ])
};

RadioTable.defaultProps = {
    style: null,
    badgeStyle: null,
    textStyle: null
};

export default RadioTable;
