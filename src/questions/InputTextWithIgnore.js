/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import InputField from '@indec/react-native-md-textinput';

import QuestionText from './QuestionText';
import colors from './colors';
import styles from './styles';

const InputTextWithIgnore = ({answer, question, onChange}) => {
    const inputDisabled = answer === question.ignoreValue;
    return (
        <View style={styles.rowContainer}>
            <QuestionText question={question}/>
            <View>
                <Text>{question.inputText}</Text>
                {inputDisabled
                    ? <Text>(Deshabilitado)</Text>
                    : <InputField
                        maxLength={question.maxLength}
                        style={styles.testText}
                        keyboardType="default"
                        value={answer !== null ? answer : ''}
                        onChangeText={text => onChange({[question.name]: text})}
                        label={question.floatingLabel ? question.floatingLabel : ''}
                        highlightColor={colors.accent}
                    />
                }
                {question.inputUnit && <Text>{question.inputUnit}</Text>}
            </View>
            <View>
                <Text>{question.ignoreText}</Text>
                <CheckBox
                    style={{width: 20}}
                    onPress={() => onChange(
                        {[question.name]: answer !== question.ignoreValue ? question.ignoreValue : null}
                    )}
                    checked={answer === question.ignoreValue}
                />
            </View>
        </View>
    );
};

InputTextWithIgnore.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.bool
};

InputTextWithIgnore.defaultProps = {
    answer: null
};

export default InputTextWithIgnore;
