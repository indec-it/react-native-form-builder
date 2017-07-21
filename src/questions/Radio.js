/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

const styles = StyleSheet.create({
    rowContainer: {
        paddingHorizontal: 4,
    }
});

const Radio = ({answer, question, onChange}) => {
    const change = (value, callback) => callback({target: {name: question.name, value}});
    return (
        <View style={styles.rowContainer}>
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
            {question.options.map(option => (<CheckBox
                    key={option.value}
                    title={option.label}
                    checkedIcon='dot-circle-o'
                    onPress={() => change(option.value, onChange)}
                    uncheckedIcon='circle-o'
                    checked={answer === option.value}
                />)
            )}
        </View>
    );
};

Radio.propTypes = {
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

Radio.defaultProps = {
    answer: null
};

export default Radio;
