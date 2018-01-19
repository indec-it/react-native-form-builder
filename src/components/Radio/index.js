import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const Radio = ({answer, question, onChange, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <TextWithBadge question={question}/>
        {question.options.map(
            option => (option.text ? (
                <Text key={option.text} style={Utilities.setStyle(defaultStyles, style, 'text')}>
                    {option.text}
                </Text>
            ) : (
                <CheckBox
                    key={option.value}
                    title={option.label}
                    checkedIcon="dot-circle-o"
                    onPress={() => Utilities.handleChange(question.name, option.value, onChange)}
                    uncheckedIcon="circle-o"
                    checked={Utilities.isChecked(answer, option.value)}
                />
            ))
        )}
    </View>
);

Radio.propTypes = {
    question: PropTypes.shape({}).isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
};

Radio.defaultProps = {
    answer: null,
    style: null
};

export default Radio;
