import React from 'react';
import PropTypes from 'prop-types';
import {Picker, Text, View} from 'react-native';
import QuestionText from './QuestionText';

const handleChange = (value, callback, question) => callback({target: {name: question.name, value}});

const Select = ({answer, question, onChange}) => (
    <View>
        <View>
            <QuestionText question={question}/>
            <Picker
                selectedValue={answer}
                onValueChange={itemValue => handleChange(itemValue, onChange, question)}
            >
                {question.options.map(option => (<Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                    />)
                )}
            </Picker>
        </View>
    </View>
);

Select.propTypes = {
    answer: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

Select.defaultProps = {
    answer: null
};

export default Select;
