import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import Utilities from '../util';
import defaultStyles from './styles';

const TextBox = ({text, style}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
};

TextBox.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ])
};

TextBox.defaultProps = {
    style: null
};

export default TextBox;
