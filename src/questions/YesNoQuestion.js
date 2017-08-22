/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import QuestionText from './QuestionText';

const getValue = (index, question) => {
    switch (index) {
        case 0:
            return question.trueValue;
        case 1:
            return question.falseValue;
        case 2:
            return question.dkValue;
        default:
            return null;
    }
};

const getSelectedValue = (answer, question) => {
    switch (answer) {
        case question.trueValue:
            return 0;
        case question.falseValue:
            return 1;
        case question.dkValue:
            return 2;
        default:
            return null;
    }
};

const onPress = (index, callback, question) => {
    const value = getValue(index, question);
    return callback({target: {name: question.name, value}})
};

const YesNoQuestion = ({answer, question, onChange}) => {
    const buttons = [{element: () => <Text>SI</Text>}, {element: () => <Text>NO</Text>}];
    if (question.dkValue) {
        buttons.push({element: () => <Text>{question.dkLabel}</Text>})
    }

    return (
        <View>
            <QuestionText question={question}/>
            <ButtonGroup
                onPress={index => onPress(index, onChange, question)}
                selectedIndex={getSelectedValue(answer, question)}
                buttons={buttons}
                containerStyle={{height: 100}}
                selectedBackgroundColor="#41B5FF"
            />
        </View>
    );
};

YesNoQuestion.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

YesNoQuestion.defaultProps = {
    answer: null
};

export default YesNoQuestion;
