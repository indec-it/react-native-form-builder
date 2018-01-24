import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, Text} from 'react-native';
import {Button, Row, Col} from 'react-bootstrap';

import InfoTextBox from './InfoTextBox';
import QuestionText from './QuestionText';
import styles from './styles';
import FontAwesome from 'react-fontawesome';

const BLANK_VALUE = '*';

const handleChange = (value, callback, question) => {
    if (value && question.maxLength && value.length > question.maxLength) {
        return;
    }
    return callback({target: {name: question.name, value}})
};

const handleChangeBlankButton = (currentAnswerValue, callback, question) => {
    if (currentAnswerValue === BLANK_VALUE) {
        callback({target: {name: question.name}});
    } else {
        callback({target: {name: question.name, value: BLANK_VALUE}});
    }
};

const InputNumber = ({answer, question, onChange}) => {
    const inputDisabled = answer === BLANK_VALUE;

    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
            <Row>
                <Col sm={10}>
                    {inputDisabled
                        ?
                        <View>
                            <TextInput
                                style={styles.inputReactDisabled}
                                value={'(Blanco)'}
                                editable={false}
                            />
                        </View>
                        :
                        <View>
                            <TextInput
                                style={styles.inputReact}
                                max={question.max}
                                maxLength={question.maxLength}
                                min={question.min}
                                keyboardType={'numeric'}
                                value={String(answer)}
                                onChangeText={text => handleChange(text, onChange, question)}
                            />
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

InputNumber.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputNumber.defaultProps = {
    answer: ''
};

export default InputNumber;
