import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import Utilities from '../util';
import defaultStyles from './styles';

const TextBox = ({text, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <Text style={Utilities.setStyle(defaultStyles, style, 'text')}>
            {text}
        </Text>
    </View>
);

TextBox.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    text: PropTypes.string.isRequired
};

TextBox.defaultProps = {
    style: null
};

export default TextBox;
