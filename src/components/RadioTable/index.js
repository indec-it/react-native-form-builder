import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Row, Col, Grid} from '@indec/react-native-commons';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const setRowQuestion = (question, section, rowQuestion, onChange, style) => {
    const questionName = question.name + rowQuestion.name;
    const questionValue = section[questionName];
    return (
        <Row key={questionName}>
            <Col size={4}>
                <Text style={Utilities.setStyle(defaultStyles, style, 'rowLabel')}>
                    {question.text}
                </Text>
            </Col>
            {question.options.map(option => (
                <Col style={Utilities.setStyle(defaultStyles, style, 'column')}>
                    <CheckBox
                        key={option.value}
                        containerStyle={Utilities.setStyle(defaultStyles, style, 'checkBoxContainer')}
                        checkedIcon="dot-circle-o"
                        onPress={() => Utilities.handleChange(questionName, option.value, onChange)}
                        uncheckedIcon="circle-o"
                        checked={Utilities.isChecked(questionValue, option.value)}
                    />
                </Col>
            ))}
        </Row>
    );
};

const RadioTable = ({section, question, onChange, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <TextWithBadge question={question}/>
        <Grid>
            <Row>
                <Col size={4}>
                    {question.options.map(option => (
                        <Col
                            key={option.text}
                            style={Utilities.setStyle(defaultStyles, style, 'column')}
                        >
                            <Text>
                                {option.text}
                            </Text>
                        </Col>
                    ))}
                </Col>
            </Row>
            {question.questions.map(rowQuestion => (
                setRowQuestion(question, section, rowQuestion, onChange, style)
            ))}
        </Grid>
    </View>
);

RadioTable.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
};

RadioTable.defaultProps = {
    style: null
};

export default RadioTable;
