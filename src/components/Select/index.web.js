import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import TextWithBadge from '../TextWithBadge';

const Select = ({answer, question, onChange}) => (
    <View>
        <TextWithBadge question={question}/>
        <select
            value={answer}
            onChange={e => onChange({[question.name]: e.target.value})}
        >
            {question.options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
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
