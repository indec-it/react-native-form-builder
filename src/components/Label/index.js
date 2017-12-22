import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const Label = ({question}) => (
    <View>
        <Text>{question.text}</Text>
    </View>
);

Label.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default Label;
