import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import styles from './styles';

const Title = ({question, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            <Text style={computedStyles.text}>
                {question.text}
            </Text>
        </View>
    );
};

Title.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: stylePropType
};

Title.defaultProps = {
    style: null
};

export default Title;
