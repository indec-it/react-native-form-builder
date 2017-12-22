import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const InfoTextBox = ({text}) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

InfoTextBox.propTypes = {
    text: PropTypes.string.isRequired
};

export default InfoTextBox;
