import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Button, Row, Col} from 'react-bootstrap';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import InfoTextBox from './InfoTextBox';
import FontAwesome from 'react-fontawesome';
import styles from './styles';

const handleChange = (value, callback, question) => callback({target: {name: question.name, value}});

const Radio = ({answer, question, onChange}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
        {question.options.map(option => (
            <CheckBox
                key={option.value}
                title={'(' + option.value + ') ' + option.label}
                checkedIcon="dot-circle-o"
                onPress={() => handleChange(option.value, onChange, question)}
                uncheckedIcon="circle-o"
                checked={answer === option.value}
            />
        ))}
        <Row>
            <Col sm={4}></Col>
            <Col sm={2}>
                <Button
                    onClick={() => handleChange('*', onChange, question)}
                    bsStyle="primary"
                    className="btn btn-group-justified"
                >
                    Blanco &nbsp;
                    {answer === '*' &&
                    <FontAwesome name="check"/>
                    }
                </Button>
            </Col>
            <Col sm={2}>
                <Button
                    onClick={() => handleChange('#', onChange, question)}
                    bsStyle="primary"
                    className="btn btn-group-justified"
                >
                    Multimarca &nbsp;
                    {answer === '#' &&
                    <FontAwesome name="check"/>
                    }
                </Button>
            </Col>
        </Row>
    </View>
);

Radio.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

Radio.defaultProps = {
    answer: null
};

export default Radio;
