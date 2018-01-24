import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Row} from '@indec/react-native-commons';
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
    style.radioButton, answer === questionValue ? style.buttonColorPressed : style.buttonColorDefault
]);

const YesNoButtons = ({answer, question, onChange, style, badgeStyle, textStyle, textBoxStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    const buttons = [
        {element: () => <Text style={getRadioButtonStyle(answer, question.trueValue, styles)}>SI</Text>},
        {element: () => <Text style={getRadioButtonStyle(answer, question.falseValue, styles)}>NO</Text>}
    ];

    if (question.dkValue) {
        buttons.push({
            element: () => <Text style={getRadioButtonStyle(answer, question.dkValue, styles)}>{question.dkLabel}</Text>
        });
    }
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textStyle}
                badgeStyle={badgeStyle}
                textBoxStyle={textBoxStyle}
            />}
            <Row>
                <ButtonGroup
                    onPress={index => Utilities.handleChange(question.name, getValue(index, question), onChange)}
                    selectedIndex={getSelectedValue(answer, question)}
                    buttons={buttons}
                    containerStyle={styles.radioGroup}
                    selectedBackgroundColor="#3f53b5"
                />
            </Row>
        </View>
    );
};

YesNoButtons.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: Utilities.getStyleProps(),
    badgeStyle: Utilities.getStyleProps(),
    textStyle: Utilities.getStyleProps(),
    textBoxStyle: Utilities.getStyleProps(),
    answer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};

YesNoButtons.defaultProps = {
    style: null,
    badgeStyle: null,
    textStyle: null,
    textBoxStyle: null,
    answer: null
};

export default YesNoButtons;
