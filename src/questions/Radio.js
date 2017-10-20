/* eslint-disable lodash/prefer-lodash-method */
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import QuestionText from './QuestionText';
import InfoTextBox from './InfoTextBox';
import styles from './styles';

const Radio = ({answer, question, onChange}) => (
    <View style={styles.columnContainer}>
        <QuestionText question={question}/>
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
        {question.options.map(option => (
            <CheckBox
                key={option.value}
                title={option.label}
                checkedIcon="dot-circle-o"
                onPress={() => onChange({[question.name]: option.value})}
                uncheckedIcon="circle-o"
                checked={answer === option.value}
            />
        ))}
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
