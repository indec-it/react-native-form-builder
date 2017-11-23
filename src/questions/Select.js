/* eslint-disable lodash/prefer-lodash-method */
import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import {concat} from 'lodash';

import QuestionText from './QuestionText';

const addPlaceholder = (options, placeholder) =>
    (placeholder ? concat({label: placeholder, value: null}, options) : options);

const Select = ({answer, question, onChange}) => (
    <View style={{flex: 1}}>
        <QuestionText question={question}/>
        <Picker
            selectedValue={answer}
            onValueChange={itemValue => onChange({[question.name]: itemValue})}
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
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.number
};

Select.defaultProps = {
    answer: null
};

export default Select;
