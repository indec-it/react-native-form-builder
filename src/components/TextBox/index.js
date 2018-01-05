import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const TextBox = ({text}) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

TextBox.propTypes = {
    text: PropTypes.string.isRequired
};

export default TextBox;
