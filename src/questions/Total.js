/* eslint-disable lodash/prefer-lodash-method */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {filter, toNumber, isNil, sum, isNaN} from 'lodash';

import QuestionText from './QuestionText';
import styles from './styles';

const getTotal = (section, question) => {
    const toAdd = [];
    const questions = filter(question.fieldsToAdd, q => !isNil(section[q]));
    questions.map(q => toAdd.push(toNumber(section[q])));
    const total = sum(toAdd);
    return isNaN(total) ? 0 : total;
};

const Total = ({section, question}) => (
    <View style={styles.rowContainer}>
        <QuestionText question={question}/>
        <Text>{getTotal(section, question)}</Text>
    </View>
);

Total.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired
};

export default Total;
