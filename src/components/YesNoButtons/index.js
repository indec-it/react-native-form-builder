import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Row} from '@indec/react-native-commons';
import {ButtonGroup} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import TextWithBadge from '../TextWithBadge';
import {handleChange} from '../../util';
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

const getRadioButtonStyle = (answer, questionValue, style) => ([
    style.radioButton, answer === questionValue ? style.buttonColorPressed : style.buttonColorDefault
]);

const YesNoButtons = ({answer, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);

    const buttons = [{
        element: () => (
            <Text style={getRadioButtonStyle(answer, question.trueValue, computedStyles.component)}>
                SI
            </Text>
        )
    }, {
        element: () => (
            <Text style={getRadioButtonStyle(answer, question.falseValue, computedStyles.component)}>
                NO
            </Text>
        )
    }];

    if (question.dkValue) {
        buttons.push({
            element: () => (
                <Text style={getRadioButtonStyle(answer, question.dkValue, computedStyles.component)}>
                    {question.dkLabel}
                </Text>
            )
        });
    }
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Row>
                <ButtonGroup
                    onPress={index => handleChange(question.name, getValue(index, question), onChange)}
                    selectedIndex={getSelectedValue(answer, question)}
                    buttons={buttons}
                    containerStyle={computedStyles.component.radioGroup}
                    selectedBackgroundColor={computedStyles.selectedBackgroundColor}
                />
            </Row>
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
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

YesNoButtons.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null
};

export default YesNoButtons;
