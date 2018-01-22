import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import Utilities from '../util';
import DecimalInput from '../DecimalInput';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const handlePress = ({name, ignoreValue}, answer, onChange) => (onChange({
    [name]: answer !== ignoreValue ? ignoreValue : null
}));

const isIgnored = ({ignoreValue}, answer) => answer === ignoreValue;

const DecimalInputOrIgnore = ({answer, question, onChange, style, inputStyle, textStyle, badgeStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {isIgnored(question, answer) ?
                <View>
                    {question.text && <TextWithBadge question={question} style={textStyle} badgeStyle={badgeStyle}/>}
                    <Text>(Deshabilitado)</Text>
                </View>
                :
                <DecimalInput
                    answer={answer}
                    question={question}
                    onChange={num => onChange(num)}
                    style={inputStyle}
                    textStyle={textStyle}
                    badgeStyle={badgeStyle}
                />
            }
            {question.inputUnit && <Text>{question.inputUnit}</Text>}
            <CheckBox
                style={styles.checkBox}
                onPress={() => handlePress(question, !answer, onChange)}
                checked={isIgnored(question, answer)}
            />
        </View>
    );
};

DecimalInputOrIgnore.propTypes = {
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
    ]),
    inputStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    badgeStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ])
};

DecimalInputOrIgnore.defaultProps = {
    answer: null,
    style: null,
    inputStyle: null,
    badgeStyle: null,
    textStyle: null
};

export default DecimalInputOrIgnore;
