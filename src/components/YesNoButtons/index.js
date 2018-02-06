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
            return 1;
        case question.falseValue:
            return 2;
        case question.dkValue:
            return 3;
        default:
            return null;
    }
};

const getRadioButtonStyle = (answer, questionValue, style) => ([
    style.radioButton, answer === questionValue ? style.buttonColorPressed : style.buttonColorDefault
]);

const YesNoButtons = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);

    const buttons = [{
        element: () => (
            <Text style={getRadioButtonStyle(answer, question.trueValue, computedStyles.component.style)}>
                SI
            </Text>
        )
    }, {
        element: () => (
            <Text style={getRadioButtonStyle(answer, question.falseValue, computedStyles.component.style)}>
                NO
            </Text>
        )
    }];

    if (question.dkValue) {
        buttons.push({
            element: () => (
                <Text style={getRadioButtonStyle(answer, question.dkValue, computedStyles.component.style)}>
                    {question.dkLabel}
                </Text>
            )
        });
    }
    return (
        <View style={computedStyles.component.style.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <Row>
                <ButtonGroup
                    onPress={index => handleChange(question.name, getValue(index, question), onChange)}
                    selectedIndex={getSelectedValue(answer, question)}
                    buttons={buttons}
                    containerStyle={computedStyles.component.style.radioGroup}
                    selectedBackgroundColor={computedStyles.component.selectedBackgroundColor}
                />
            </Row>
        </View>
    );
};

YesNoButtons.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    }),
    answer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};

YesNoButtons.defaultProps = {
    style: null,
    answer: null
};

export default YesNoButtons;
