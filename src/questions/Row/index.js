import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

const Row = ({children, flexSize}) => (
    <View style={flexSize ? [{flex: flexSize}, styles.withFlexSize] : styles.withoutFlexSize}>
        {children}
    </View>
);

Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array
    ]).isRequired,
    flexSize: PropTypes.number
};

Row.defaultProps = {
    flexSize: null
};

export default Row;
