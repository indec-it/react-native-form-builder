import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {includes} from 'lodash';

import styles from './styles';

const QuestionText = ({question}) => (
    <View style={styles.container}>
        {question.number && !includes(question.number, '.') && <Badge
            containerStyle={styles.primaryBadge.container}
            textStyle={styles.primaryBadge.text}
            value={question.number}
        />}
        {question.number && includes(question.number, '.') && <Badge
            containerStyle={styles.secondaryBadge.container}
            textStyle={styles.secondaryBadge.text}
            value={question.number}
        />}
        <Text style={styles.text}>{question.text}</Text>
    </View>
);

QuestionText.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default QuestionText;
