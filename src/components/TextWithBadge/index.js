import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {includes} from 'lodash';

import InfoTextBox from '../TextBox';
import styles from './styles';

const getBadge = number => (
    !includes(number, '.') ?
        <Badge
            containerStyle={styles.primaryBadgeContainer}
            textStyle={styles.primaryBadgeText}
            value={number}
        /> :
        <Badge
            containerStyle={styles.secondaryBadgeContainer}
            textStyle={styles.secondaryBadgeText}
            value={number}
        />
);

const TextWithBadge = ({question: {number, text, infoAfterText}}) => (
    <View style={styles.container}>
        <View style={styles.textWithBadgeContainer}>
            {number && getBadge(number)}
            <Text style={styles.text}>{text}</Text>
        </View>
        {infoAfterText && <InfoTextBox text={infoAfterText}/>}
    </View>
);

TextWithBadge.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string.isRequired,
        number: PropTypes.number,
        infoAfterText: PropTypes.string
    }).isRequired
};

export default TextWithBadge;
