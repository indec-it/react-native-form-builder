/* eslint-disable lodash/prefer-lodash-method */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {filter, toNumber, isNil, sum, isNaN} from 'lodash';

import QuestionText from '../Text';
import styles from './styles';

const getTotal = (section, question, callback) => {
    const addends = filter(
        question.fieldsToAdd,
        field => !isNil(section[field])
    ).map(
        field => toNumber(section[field])
    );

    let total = sum(addends);

    if (isNaN(total)) {
        total = 0;
    }
    if (section[question.name] === total) {
        return total;
    }

    callback({[question.name]: total});
    return total;
};

const Total = ({section, question, onChange}) => (
    <View style={styles.container}>
        <QuestionText question={question}/>
        <Text>{getTotal(section, question, onChange)}</Text>
    </View>
);

Total.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Total;
