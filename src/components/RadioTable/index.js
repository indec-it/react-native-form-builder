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

const renderRowQuestion = (question, section, rowQuestion, onChange, computedStyles) => {
    const questionName = question.name + rowQuestion.name;
    const questionValue = section[questionName];
    return (
        <Row key={questionName}>
            <Col size={4}>
                <Text style={computedStyles.component.rowLabel}>
                    {rowQuestion.text}
                </Text>
            </Col>
            {question.options.map(option => (
                <Col
                    key={option.id}
                    style={computedStyles.component.column}
                >
                    <CheckBox
                        onPress={() => handleChange(questionName, option.value, onChange)}
                        containerStyle={computedStyles.component.checkBoxContainer}
                        checkedIcon={computedStyles.checkedIcon}
                        uncheckedIcon={computedStyles.uncheckedIcon}
                        checked={isEqual(questionValue, option.value)}
                    />
                </Col>
            ))}
        </Row>
    );
};

const RadioTable = ({section, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Grid>
                <Row style={computedStyles.component.row}>
                    <Col size={4}/>
                    {question.options.map(option => (
                        <Col
                            key={option.text}
                            style={computedStyles.component.column}
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

RadioTable.displayName = 'radioTable';

RadioTable.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

RadioTable.defaultProps = {
    style: null,
    textWithBadgeStyle: null
};

export default RadioTable;
