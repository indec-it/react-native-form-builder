import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {types} from '../../enums';
import styles from './styles';

const Title = ({question, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            <Text style={computedStyles.title}>
                {question.text}
            </Text>
        </View>
    );
};

Title.displayName = types.TITLE;

Title.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: stylePropType
};

Title.defaultProps = {
    style: null
};

export default Title;
