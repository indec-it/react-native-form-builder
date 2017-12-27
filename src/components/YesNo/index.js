import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import QuestionText from '../Text';
import styles from './styles';

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

const getRadioButtonStyle = (answer, questionValue) => (
    [styles.radioButton, answer === questionValue ? {color: '#ffffff'} : {color: '#000000'}]
);

const YesNoQuestion = ({answer, question, onChange}) => {
    const buttons = [
        {element: () => <Text style={getRadioButtonStyle(answer, question.trueValue)}>SI</Text>},
        {element: () => <Text style={getRadioButtonStyle(answer, question.falseValue)}>NO</Text>}
    ];
    if (question.dkValue) {
        buttons.push({
            element: () => (
                <Text style={getRadioButtonStyle(answer, question.dkValue)}>{question.dkLabel}</Text>
            )
        });
    }

    return (
        <View style={styles.container}>
            <QuestionText question={question} style={styles.text}/>
            <ButtonGroup
                onPress={index => onChange({[question.name]: getValue(index, question)})}
                selectedIndex={getSelectedValue(answer, question)}
                buttons={buttons}
                containerStyle={styles.radioGroup}
                selectedBackgroundColor="#3f53b5"
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
