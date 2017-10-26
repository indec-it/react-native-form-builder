import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {includes} from 'lodash';

import styles from './styles';

const QuestionText = ({question}) => (
    <View style={styles.questionText.container}>
        {question.number && !includes(question.number, '.') && <Badge
            containerStyle={styles.questionText.primaryBadge.container}
            textStyle={styles.questionText.primaryBadge.text}
            value={question.number}
        />}
        {question.number && includes(question.number, '.') && <Badge
            containerStyle={styles.questionText.secondaryBadge.container}
            textStyle={styles.questionText.secondaryBadge.text}
            value={question.number}
        />}
        <Text style={styles.questionText.text}>{question.text}</Text>
    </View>
);

QuestionText.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default QuestionText;
