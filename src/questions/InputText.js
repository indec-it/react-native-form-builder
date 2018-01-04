/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, Text} from 'react-native';
import {Button, Row, Col} from 'react-bootstrap';

import QuestionText from './QuestionText';
import styles from './styles';
import FontAwesome from 'react-fontawesome';

const BLANK_VALUE = '*';

const handleChange = (value, callback, question) => callback({target: {name: question.name, value}});

const handleChangeBlankButton = (currentAnswerValue, callback, question) => {
    if (currentAnswerValue === BLANK_VALUE) {
        callback({target: {name: question.name}});
    } else {
        callback({target: {name: question.name, value: BLANK_VALUE}});
    }
}

const styleAux = {
    inputReactDisabled: {
        backgroundColor: '#B1AF98',
        borderBottomColor: '#b9b9b9',
        borderBottomWidth: 1,
        height: 26
    }
}

const InputText = ({answer, question, onChange}) => {
    const inputDisabled = answer === BLANK_VALUE;

    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
            <Row>
                <Col sm={10}>
                    {inputDisabled
                        ?
                        <TextInput
                            style={style.inputReactDisabled}
                            value={'(Blanco)'}
                            editable={false}
                        />
                        :
                        <View>
                            <TextInput
                                style={styles.inputReact}
                                maxLength={question.maxLength}
                                onChangeText={text => handleChange(text, onChange, question)}
                                value={answer}
                            />
                            {question.inputUnit && <Text>{question.inputUnit}</Text>}
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

InputText.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

InputText.defaultProps = {
    answer: null
};

export default InputText;
