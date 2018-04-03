import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {includes, toString} from 'lodash';

import {TextBox} from '..';
import styles from './styles';
import commonStyles from '../commonStyles';

const getBadge = (number, badgeStyle) => {
    const parsedNumber = toString(number);
    return (
        !includes(parsedNumber, '.') ? (
            <Badge
                containerStyle={badgeStyle.primaryContainer}
                text={badgeStyle.primaryText}
                value={number}
            />
        ) : (
            <Badge
                containerStyle={badgeStyle.secondaryContainer}
                text={badgeStyle.secondaryText}
                value={number}
            />
        )
    );
};

const TextWithBadge = ({question: {number, text, infoAfterText}, style, disabled}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.text.container}>
            <View style={computedStyles.text.textWithBadgeContainer}>
                {number && getBadge(number, computedStyles.badge)}
                <Text style={computedStyles.text.text}>
                    {text}
                </Text>
            </View>
            {infoAfterText && <TextBox text={infoAfterText} style={computedStyles.textBox}/>}
        </View>
    );
};

TextWithBadge.displayName = 'textWithBadge';

TextWithBadge.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string.isRequired,
        number: PropTypes.number,
        infoAfterText: PropTypes.string
    }).isRequired,
    style: stylePropType,
    disabled: PropTypes.bool
};

TextWithBadge.defaultProps = {
    style: null,
    disabled: false
};

export default TextWithBadge;
