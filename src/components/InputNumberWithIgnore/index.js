import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import InputField from '@indec/react-native-md-textinput';
import {toNumber, toString} from 'lodash';

import TextWithBadge from '../TextWithBadge';
import styles from './styles';

const InputNumberWithIgnore = ({answer, question, onChange}) => {
    const inputDisabled = answer === question.ignoreValue;
    return (
        <View style={styles.container}>
            <TextWithBadge question={question}/>
            <View>
                <Text>{question.inputText}</Text>
                {inputDisabled ? <Text>(Deshabilitado)</Text>
                    : <InputField
                        inputStyle={styles.field}
                        wrapperStyle={styles.wrapper}
                        labelStyle={styles.label}
                        max={question.max}
                        maxLength={question.maxLength}
                        min={question.min}
                        keyboardType="numeric"
                        value={answer !== null ? toString(answer) : ''}
                        onChangeText={num => onChange({[question.name]: toNumber(num)})}
                        label={question.floatingLabel ? question.floatingLabel : ''}
                        highlightColor="#ff4281"
                    />
                }
                {question.inputUnit && <Text>{question.inputUnit}</Text>}
            </View>
            <View>
                <Text>{question.ignoreText}</Text>
                <CheckBox
                    style={styles.checkBox}
                    onPress={() => onChange({
                        [question.name]: answer !== question.ignoreValue ? question.ignoreValue : null
                    })}
                    checked={answer === question.ignoreValue}
                />
            </View>
        </View>
    );
};

InputNumberWithIgnore.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};

InputNumberWithIgnore.defaultProps = {
    answer: null
};

export default InputNumberWithIgnore;
