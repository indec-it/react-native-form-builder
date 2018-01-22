import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {includes} from 'lodash';

import Utilities from '../util';
import TextBox from '../TextBox';
import defaultStyles from './styles';

const getBadge = (number, badgeStyle) => {
    const styles = Utilities.setStyles(defaultStyles, badgeStyle);
    return (
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
};

const TextWithBadge = ({question: {number, text, infoAfterText}, style, badgeStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            <View style={styles.textWithBadgeContainer}>
                {number && getBadge(number, badgeStyle)}
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
            {infoAfterText && <TextBox text={infoAfterText}/>}
        </View>
    );
};

TextWithBadge.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string.isRequired,
        number: PropTypes.number,
        infoAfterText: PropTypes.string
    }).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    badgeStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ])
};

TextWithBadge.defaultProps = {
    style: null,
    badgeStyle: null
};

export default TextWithBadge;
