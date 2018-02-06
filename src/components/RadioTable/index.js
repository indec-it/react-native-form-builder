import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Row, Col, Grid} from '@indec/react-native-commons';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {isEqual} from 'lodash';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const renderRowQuestion = (question, section, rowQuestion, onChange, style) => {
    const questionName = question.name + rowQuestion.name;
    const questionValue = section[questionName];
    return (
        <Row key={questionName}>
            <Col size={4}>
                <Text style={style.component.style.rowLabel}>
                    {rowQuestion.text}
                </Text>
            </Col>
            {question.options.map(option => (
                <Col
                    key={option.id}
                    style={style.component.style.column}
                >
                    <CheckBox
                        onPress={() => handleChange(questionName, option.value, onChange)}
                        containerStyle={style.component.style.checkBoxContainer}
                        checkedIcon={style.component.checkedIcon}
                        uncheckedIcon={style.component.uncheckedIcon}
                        checked={isEqual(questionValue, option.value)}
                    />
                </Col>
            ))}
        </Row>
    );
};

const RadioTable = ({section, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.style.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <Grid>
                <Row style={computedStyles.component.style.row}>
                    <Col size={4}/>
                    {question.options.map(option => (
                        <Col
                            key={option.text}
                            style={computedStyles.component.style.column}
                        >
                            <Text style={option.text}>
                                {option.text}
                            </Text>
                        </Col>
                    ))}
                </Row>
                {question.questions.map(rowQuestion => (
                    renderRowQuestion(question, section, rowQuestion, onChange, computedStyles)
                ))}
            </Grid>
        </View>
    );
};

RadioTable.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    })
};

RadioTable.defaultProps = {
    style: null
};

export default RadioTable;
