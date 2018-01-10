import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {some} from 'lodash';

import Row from '../Row';
import styles from './styles';

const isRow = children => some(children, child => child.type === Row);

const Grid = ({children, gridStyle}) => (
    <View
        style={[
            isRow(children) ? styles.col : styles.row,
            gridStyle
        ]}
    >
        {children}
    </View>
);

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.shape({}),
        PropTypes.array
    ]).isRequired,
    gridStyle: PropTypes.shape({})
};

Grid.defaultProps = {
    gridStyle: {}
};

export default Grid;
