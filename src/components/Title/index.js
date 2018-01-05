import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const Title = ({question}) => (
    <View style={styles}>
        <Text>{question.text}</Text>
    </View>
);

Title.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default Title;
