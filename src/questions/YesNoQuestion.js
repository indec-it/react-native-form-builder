/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

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

const YesNoQuestion = ({answer, question, onChange}) => {
    const change = (index, callback) => {
        const value = index === 0;
        return callback({target: {name: question.name, value}})
    };
    const component1 = () => <Text>SI</Text>;
    const component2 = () => <Text>NO</Text>;
    const buttons = [{element: component1}, {element: component2}];
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
            <Text>{question.number ? `${question.number}` : ''}</Text>
            <Text>{question.text}</Text>
            <ButtonGroup
                onPress={index => change(index, onChange)}
                selectedIndex={selected(answer)}
                buttons={buttons}
                containerStyle={{height: 100}}
                selectedBackgroundColor="#41B5FF"
            />
        </View>
    );
};

YesNoQuestion.propTypes = {
    answer: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

YesNoQuestion.defaultProps = {
    answer: null
};

export default YesNoQuestion;
