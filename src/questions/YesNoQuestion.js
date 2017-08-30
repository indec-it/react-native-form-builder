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

const handlePress = (obj, section, callback) => callback({[section]: obj});

const YesNoQuestion = ({section, question, onChange}) => {
    const buttons = [
        {element: () => <Text>SI</Text>},
        {element: () => <Text>NO</Text>}
    ];
    if (question.dkValue) {
        buttons.push({element: () => <Text>{question.dkLabel}</Text>});
    }

    return (
        <View>
            <QuestionText question={question}/>
            <ButtonGroup
                onPress={index => handlePress({[question.name]: getValue(index, question)}, section.name, onChange)}
                selectedIndex={getSelectedValue(section[question.name], question)}
                buttons={buttons}
                containerStyle={{height: 100}}
                selectedBackgroundColor="#41B5FF"
            />
        </View>
    );
};

YesNoQuestion.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default YesNoQuestion;
