import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import styles from './styles';

const QuestionText = ({question}) => (
    <View style={styles.questionText.questionHeader}>
        {question.number && <Badge
            textStyle={styles.questionText.questionBadge}
            containerStyle={styles.questionText.questionBadge}
            value={question.number}
        />}
        <Text style={styles.questionText.text}>{question.text}</Text>
    </View>
);

QuestionText.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default QuestionText;
