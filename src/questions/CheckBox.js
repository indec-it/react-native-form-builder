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

const Checkbox = ({answer, question, onChange}) => {
    const change = (value, callback) => {
        value = !value;
        return callback({target: {name: question.name, value}});
    };
    return (
        <View style={styles.rowContainer}>
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
            <CheckBox
                title={question.text}
                onPress={() => change(answer, onChange)}
                checked={answer}
            />
        </View>
    );
};

Checkbox.propTypes = {
    answer: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

Checkbox.defaultProps = {
    answer: null
};

export default Checkbox;
