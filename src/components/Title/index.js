import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const Title = ({question}) => (
    <View>
        <Text>{question.text}</Text>
    </View>
);

Title.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default Title;
