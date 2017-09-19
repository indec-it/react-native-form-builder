import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const InfoTextBox = ({text}) => (
    <View style={styles.infoTextBox.container}>
        <Text style={styles.infoTextBox.text}>{text}</Text>
    </View>
);

InfoTextBox.propTypes = {
    text: PropTypes.shape({}).isRequired
};

export default InfoTextBox;
