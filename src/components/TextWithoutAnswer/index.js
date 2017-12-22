import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import QuestionText from '../Text';
import InfoTextBox from '../InfoTextBox';
import styles from './styles';

const QuestionTextWithoutAnswer = ({question}) => (
    <View style={styles.container}>
        <QuestionText question={question}/>
        {question.infoAfterText && <InfoTextBox text={question.infoAfterText}/>}
    </View>
);

QuestionTextWithoutAnswer.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default QuestionTextWithoutAnswer;
