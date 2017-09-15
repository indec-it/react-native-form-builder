import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {includes} from 'lodash';

import styles from './styles';

const QuestionText = ({question}) => (
    <View style={styles.questionText.questionHeader}>
        {question.number && <Badge
            textStyle={includes(question.number, '.') ?
                styles.questionText.secondaryQuestionBadge :
                styles.questionText.questionBadge}
            containerStyle={includes(question.number, '.') ?
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
