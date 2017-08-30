/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';
import QuestionText from './QuestionText';
import styles from './styles';

const handleChange = (obj, section, callback) => callback({[section]: obj});

const InputTextWithIgnore = ({section, question, onChange}) => {
    const answer = section[question.name];
    const inputDisabled = answer === question.ignoreValue;
    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            <View>
                <Text>{question.inputText}</Text>
                {inputDisabled
                    ? <Text>(Deshabilitado)</Text>
                    : <TextInput
                        value={answer}
                        onChangeText={text => handleChange({[question.name]: text}, section.name, onChange)}
                    />
                }
                {question.inputUnit && <Text>{question.inputUnit}</Text>}
            </View>
            <View>
                <Text>{question.ignoreText}</Text>
                <CheckBox
                    style={{width: 20}}
                    onPress={() => handleChange(
                        {[question.name]: answer !== question.ignoreValue ? question.ignoreValue : null},
                        section.name,
                        onChange
                    )}
                    checked={answer === question.ignoreValue}
                />
            </View>
        </View>
    );
};

InputTextWithIgnore.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputTextWithIgnore;
