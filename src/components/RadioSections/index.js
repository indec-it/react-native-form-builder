import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const RadioSections = ({answer, question, onChange, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <TextWithBadge question={question}/>
        {question.options.map(option => (
            option.section ?
                <Text style={Utilities.setStyle(defaultStyles, style, 'sectionTitle')}>
                    {option.section}
                </Text>
                :
                <CheckBox
                    key={option.value}
                    title={option.label}
                    checkedIcon="dot-circle-o"
                    onPress={() => Utilities.handleChange(question.name, option.value, onChange)}
                    uncheckedIcon="circle-o"
                    checked={Utilities.isChecked(answer, option.value)}
                />
        ))}
    </View>
);

RadioSections.propTypes = {
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

RadioSections.defaultProps = {
    answer: null,
    style: null
};

export default RadioSections;
