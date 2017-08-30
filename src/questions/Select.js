import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import QuestionText from './QuestionText';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const Select = ({section, question, onChange}) => (
    <View>
        <View>
            <QuestionText question={question}/>
            <Picker
                selectedValue={section[question.name]}
                onValueChange={itemValue => handleChange({[question.name]: itemValue}, section.name, onChange)}
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
    </View>
);

Select.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Select;
