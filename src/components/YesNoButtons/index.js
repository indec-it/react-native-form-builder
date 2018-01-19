import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

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

const getRadioButtonStyle = (answer, questionValue, style) => ([
    Utilities.setStyle(defaultStyles, style, 'radioButton'),
    answer === questionValue ?
        Utilities.setStyle(defaultStyles, style, 'buttonColorPressed')
        : Utilities.setStyle(defaultStyles, style, 'buttonColorDefault')
]);

const YesNoButtons = ({answer, question, onChange, style}) => {
    const buttons = [
        {element: () => <Text style={getRadioButtonStyle(answer, question.trueValue, style)}>SI</Text>},
        {element: () => <Text style={getRadioButtonStyle(answer, question.falseValue, style)}>NO</Text>}
    ];
    if (question.dkValue) {
        buttons.push({
            element: () => <Text style={getRadioButtonStyle(answer, question.dkValue, style)}>{question.dkLabel}</Text>
        });
    }

    return (
        <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
            <TextWithBadge question={question} style={Utilities.setStyle(defaultStyles, style, 'text')}/>
            <ButtonGroup
                onPress={index => Utilities.handleChange(question.name, getValue(index, question), onChange)}
                selectedIndex={getSelectedValue(answer, question)}
                buttons={buttons}
                containerStyle={Utilities.setStyle(defaultStyles, style, 'radioGroup')}
                selectedBackgroundColor="#3f53b5"
            />
        </View>
    );
};

YesNoButtons.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ])
};

YesNoButtons.defaultProps = {
    answer: null,
    style: null
};

export default YesNoButtons;
