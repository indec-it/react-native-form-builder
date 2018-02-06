import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import styles from './styles';

const TextBox = ({text, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            <Text style={computedStyles.text}>
                {text}
            </Text>
        </View>
    );
};

TextBox.propTypes = {
    text: PropTypes.string.isRequired,
    style: stylePropType
};

TextBox.defaultProps = {
    style: null
};

export default TextBox;
