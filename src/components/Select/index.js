import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import {concat} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const addPlaceholder = (options, placeholder) => (
    placeholder ? concat({label: placeholder, value: null}, options) : options
);

const Select = ({answer, question, onChange, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <TextWithBadge question={question}/>
        <Picker
            selectedValue={answer}
            style={Utilities.setStyle(defaultStyles, style, 'picker')}
            onValueChange={itemValue => Utilities.handleChange(question.name, itemValue, onChange)}
        >
            {addPlaceholder(question.options, question.placeholder).map(option => (
                <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                />
            ))}
        </Picker>
    </View>
);

Select.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.number
};

Select.defaultProps = {
    answer: null,
    style: null
};

export default Select;
