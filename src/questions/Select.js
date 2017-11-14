/* eslint-disable lodash/prefer-lodash-method */
import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';

import QuestionText from './QuestionText';

const Select = ({answer, question, onChange}) => (
    <View style={{flex: 1}}>
        <QuestionText question={question}/>
        <Picker
            selectedValue={answer}
            onValueChange={itemValue => onChange({[question.name]: itemValue})}
        >
            {question.options.map(option => (
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
