import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import Utilities from '../util';
import TextInput from '../TextInput';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const handlePress = ({name, ignoreValue}, answer, onChange) => (onChange({
    [name]: answer !== ignoreValue ? ignoreValue : null
}));

const isIgnored = ({ignoreValue}, answer) => answer === ignoreValue;

const TextInputOrIgnore = ({answer, question, onChange, style, inputStyle}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        {isIgnored(question, answer) ?
            <View>
                {question.text && <TextWithBadge question={question}/>}
                <Text>(Deshabilitado)</Text>
            </View>
            :
            <TextInput
                answer={answer}
                question={question}
                onChange={num => onChange(num)}
                style={inputStyle}
            />
        }
        {question.inputUnit && <Text>{question.inputUnit}</Text>}
        <CheckBox
            style={Utilities.setStyle(defaultStyles, style, 'checkBox')}
            onPress={() => handlePress(question, answer, onChange)}
            checked={isIgnored(question, answer)}
        />
    </View>
);

TextInputOrIgnore.propTypes = {
    question: PropTypes.shape({}).isRequired,
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
    onChange: PropTypes.func.isRequired
};

TextInputOrIgnore.defaultProps = {
    answer: null,
    style: null,
    inputStyle: null
};

export default TextInputOrIgnore;
