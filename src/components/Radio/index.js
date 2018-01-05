import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

import TextWithBadge from '../TextWithBadge';
import styles from './styles';

const Radio = ({answer, question, onChange}) => (
    <View style={styles.container}>
        <TextWithBadge question={question}/>
        {question.options.map(
            option => (option.text ? (
                <Text key={option.text} style={styles.text}>
                    {option.text}
                </Text>
            ) : (
                <CheckBox
                    key={option.value}
                    title={option.label}
                    checkedIcon="dot-circle-o"
                    onPress={() => onChange({[question.name]: option.value})}
                    uncheckedIcon="circle-o"
                    checked={answer === option.value}
                />
            ))
        )}
    </View>
);

Radio.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Radio.defaultProps = {
    answer: null
};

export default Radio;
