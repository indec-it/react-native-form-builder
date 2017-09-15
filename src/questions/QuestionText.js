import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import styles from './styles';

const QuestionText = ({question}) => (
    <View style={styles.questionText.questionHeader}>
        {question.number && <Badge
            textStyle={question.number.includes('.') ?
                styles.questionText.secondaryQuestionBadge :
                styles.questionText.questionBadge}
            containerStyle={question.number.includes('.') ?
                styles.questionText.secondaryQuestionBadge :
                styles.questionText.questionBadge}
            value={question.number}
        />}
        <Text style={styles.questionText.text}>{question.text}</Text>
    </View>
);

QuestionText.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default QuestionText;
