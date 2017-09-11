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

const YesNoQuestion = ({answer, question, onChange}) => {
    const buttons = [
        {element: () => <Text>SI</Text>},
        {element: () => <Text>NO</Text>}
    ];
    if (question.dkValue) {
        buttons.push({element: () => <Text>{question.dkLabel}</Text>});
    }

    return (
        <View style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
            <QuestionText question={question}/>
            <ButtonGroup
                onPress={index => onChange({[question.name]: getValue(index, question)})}
                selectedIndex={getSelectedValue(answer, question)}
                buttons={buttons}
                containerStyle={{flex: 1}}
                selectedBackgroundColor="#41B5FF"
            />
        </View>
    );
};

YesNoQuestion.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

YesNoQuestion.defaultProps = {
    answer: null
};

export default YesNoQuestion;
