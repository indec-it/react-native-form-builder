import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import {includes} from 'lodash';

import Utilities from '../util';
import TextBox from '../TextBox';
import defaultStyles from './styles';

const getBadge = (number, badgeStyle) => (
    !includes(number, '.') ?
        <Badge
            containerStyle={Utilities.setStyle(defaultStyles, badgeStyle, 'primaryBadgeContainer')}
            textStyle={Utilities.setStyle(defaultStyles, badgeStyle, 'primaryBadgeText')}
            value={number}
        /> :
        <Badge
            containerStyle={Utilities.setStyle(defaultStyles, badgeStyle, 'secondaryBadgeContainer')}
            textStyle={Utilities.setStyle(defaultStyles, badgeStyle, 'secondaryBadgeText')}
            value={number}
        />
);

const TextWithBadge = ({question: {number, text, infoAfterText}, style, badgeStyle}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <View style={Utilities.setStyle(defaultStyles, style, 'textWithBadgeContainer')}>
            {number && getBadge(number, badgeStyle)}
            <Text style={Utilities.setStyle(defaultStyles, style, 'text')}>
                {text}
            </Text>
        </View>
        {infoAfterText && <TextBox text={infoAfterText}/>}
    </View>
);

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
