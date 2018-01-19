import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import Utilities from '../util';
import defaultStyles from './styles';

const Title = ({question, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <Text style={Utilities.setStyle(defaultStyles, style, 'text')}>
            {question.text}
        </Text>
    </View>
);

Title.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ])
};

Title.defaultProps = {
    style: null
};

export default Title;
