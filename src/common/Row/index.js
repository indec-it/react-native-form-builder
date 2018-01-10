import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

const Row = ({children, rowStyle, size}) => (
    <View style={[{flex: size || 1}, styles.row, rowStyle]}>
        {children}
    </View>
);

Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.shape({}),
        PropTypes.array
    ]).isRequired,
    rowStyle: PropTypes.shape({}),
    size: PropTypes.number
};

Row.defaultProps = {
    size: null,
    rowStyle: {}
};

export default Row;
