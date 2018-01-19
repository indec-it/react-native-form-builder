import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {toNumber} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const DecimalInput = ({answer, question, onChange, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        {question.text && <TextWithBadge question={question}/>}
        <InputField
            inputStyle={Utilities.setStyle(defaultStyles, style, 'field')}
            wrapperStyle={Utilities.setStyle(defaultStyles, style, 'wrapper')}
            labelStyle={Utilities.setStyle(defaultStyles, style, 'label')}
            max={question.max}
            maxLength={question.maxLength}
            min={question.min}
            keyboardType="numeric"
            value={Utilities.getInputValue(answer)}
            onChangeText={text => Utilities.handleChange(question.name, text, onChange, toNumber)}
            label={question.floatingLabel || ''}
            highlightColor="#ff4281"
        />
        {question.textAfterInput &&
        <Text style={Utilities.setStyle(defaultStyles, style, 'textAfterInput')}>
            {question.textAfterInput}
        </Text>}
    </View>
);

DecimalInput.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.number
};

DecimalInput.defaultProps = {
    answer: null,
    style: null
};

export default DecimalInput;
