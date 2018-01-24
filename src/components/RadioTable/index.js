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
                    {rowQuestion.text}
                </Text>
            </Col>
            {question.options.map(option => (
                <Col key={option.text + questionName} style={style.column}>
                    <CheckBox
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

const RadioTable = ({section, question, onChange, style, badgeStyle, textStyle, textBoxStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textStyle}
                badgeStyle={badgeStyle}
                textBoxStyle={textBoxStyle}
            />}
            <Grid>
                <Row style={styles.row}>
                    <Col size={4}/>
                    {question.options.map(option => (
                        <Col key={option.text} style={styles.column}>
                            <Text style={option.text}>
                                {option.text}
                            </Text>
                        </Col>
                    ))}
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
    style: Utilities.getStyleProps(),
    badgeStyle: Utilities.getStyleProps(),
    textStyle: Utilities.getStyleProps(),
    textBoxStyle: Utilities.getStyleProps()
};

RadioTable.defaultProps = {
    style: null,
    badgeStyle: null,
    textStyle: null,
    textBoxStyle: null
};

export default RadioTable;
