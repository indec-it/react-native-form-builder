/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import {Button, Row, Col} from 'react-bootstrap';

import {CheckBox} from 'react-native-elements';
import QuestionText from './QuestionText';
import FontAwesome from 'react-fontawesome';
import styles from './styles';

const BLANK_VALUE = '*';

const handleChangeBlankButton = (currentAnswerValue, callback, question) => {
    if (currentAnswerValue === BLANK_VALUE) {
        callback({target: {name: question.name}});
    } else {
        callback({target: {name: question.name, value: BLANK_VALUE}});
    }
};

const handleChangeCheckbox = (value, callback, question) => {
    const isChecked = value === question.ignoreValue;
    const answerValue = !isChecked ? question.ignoreValue : null;
    return callback({target: {name: question.name, value: answerValue}});
};

const handleChangeInput = (value, callback, question) => {
    if (value && question.maxLength && value.length > question.maxLength) {
        return;
    }
    return callback({target: {name: question.name, value}})
};

const InputNumberWithIgnore = ({answer, question, onChange}) => {
    const inputDisabledByBlank = answer === BLANK_VALUE;
    const inputDisabled = answer === question.ignoreValue;
    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            <Row>
                <Col sm={10}>
                    {inputDisabledByBlank
                        ?
                        <View>
                            <TextInput
                                style={styles.inputReactDisabled} //TODO!!! : Setear color de fondo a gris
                                value={'(Blanco)'}
                                editable={false}
                            />
                        </View>
                        :
                        <View>
                            <Text>{question.inputText}</Text>
                            {inputDisabled ? <Text>(Deshabilitado)</Text>
                                : <TextInput
                                    style={styles.inputReact}
                                    max={question.max}
                                    maxLength={question.maxLength}
                                    min={question.min}
                                    keyboardType={'numeric'}
                                    value={answer}
                                    onChangeText={text => handleChangeInput(text, onChange, question)}
                                />
                            }
                            {question.inputUnit && <Text>{question.inputUnit}</Text>}
                            <View>
                                <Text>{question.ignoreText}</Text>
                                <CheckBox
                                    style={{width: 20}}
                                    onPress={() => handleChangeCheckbox(answer, onChange, question)}
                                    checked={answer === question.ignoreValue}
                                />
                            </View>
                        </View>
                    }
                </Col>
                <Col sm={2}>
                    <Button
                        onClick={() => handleChangeBlankButton(answer, onChange, question)}
                        bsStyle="primary"
                        className="btn btn-group-justified"
                    >
                        Blanco &nbsp;
                        {answer === BLANK_VALUE &&
                        <FontAwesome name="check"/>
                        }
                    </Button>
                </Col>
            </Row>
        </View>
    );
};

InputNumberWithIgnore.propTypes = {
    answer: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputNumberWithIgnore.defaultProps = {
    answer: null
};

export default InputNumberWithIgnore;
