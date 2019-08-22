import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Row, Col, Grid} from '@indec/react-native-commons';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {isEqual, map} from 'lodash';

import TextBox from '../TextBox';
import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import {types} from '../../enums';
import commonStyles from '../commonStyles';
import styles from './styles';

const renderRowQuestion = (question, section, rowQuestion, onChange, computedStyles, disabled, infoAfterText) => {
    const questionName = question.name + rowQuestion.name;
    const questionValue = section[questionName];
    return (
        <Row key={questionName}>
            <Col size={4}>
                <Text style={computedStyles.component.rowLabel}>
                    {rowQuestion.text}
                </Text>
                {infoAfterText && <TextBox text={infoAfterText} style={computedStyles.infoAfterText}/>}
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
                        disabled={disabled}
                    />
                </Col>
            ))}
        </Row>
    );
};

const RadioTable = ({
    section, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Grid>
                <Row style={computedStyles.component.row}>
                    <Col size={4}/>
                    {map(question.options, option => (
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
                {map(question.questions, rowQuestion => (
                    renderRowQuestion(
                        question,
                        section,
                        rowQuestion,
                        onChange,
                        computedStyles,
                        disabled,
                        rowQuestion.infoAfterText
                    )
                ))}
            </Grid>
        </View>
    );
};

RadioTable.displayName = types.RADIO_TABLE;

RadioTable.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({
        text: PropTypes.string,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string
            })
        ),
        questions: PropTypes.arrayOf(
            PropTypes.shape({})
        )
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

RadioTable.defaultProps = {
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default RadioTable;
