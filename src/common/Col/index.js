import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

const Col = ({children, columnStyle, size}) => (
    <View style={[{flex: size || 1}, styles.col, columnStyle]}>
        {children}
    </View>
);

Col.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.shape({}),
        PropTypes.array
    ]).isRequired,
    columnStyle: PropTypes.shape({}),
    size: PropTypes.number
};

Col.defaultProps = {
    size: null,
    columnStyle: {}
};

export default Col;
