/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import { Picker, StyleSheet, Text, View } from 'react-native';
import QuestionText from './QuestionText';

const styles = StyleSheet.create({
    rowContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 8,
    }
});

const Select = ({answer, question, onChange}) => {
    const change = (value, callback) => callback({target: {name: question.name, value}});
    const selected = answer => {
        if (answer) {
            return 0;
        } else if (answer === false) {
            return 1;
        }
        return null;
    };
    return (
        <View>
            <View>
                <QuestionText question={question}/>
                <Picker
                    selectedValue={answer}
                    onValueChange={itemValue => change(itemValue, onChange)}
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
};

Select.propTypes = {
    answer: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

Select.defaultProps = {
    answer: null
};

export default Select;
