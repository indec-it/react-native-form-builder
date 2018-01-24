import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import Utilities from '../util';
import defaultStyles from './styles';

const Title = ({question, style}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {question.text}
            </Text>
        </View>
    );
};

Title.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: Utilities.getStyleProps()
};

Title.defaultProps = {
    style: null
};

export default Title;
