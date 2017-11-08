import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {forEach, isEmpty} from 'lodash';

import Row from './Row';

const isRow = children => {
    let row = false;
    forEach(children, child => {
        if (child && child.type === Row) {
            row = true;
        }
    });
    return row;
};

const Grid = ({children, containerStyle}) => (
    <View
        style={[
            {
                container: {
                    flex: 1,
                    flexDirection: isRow(children) ? 'column' : 'row'
                }
            },
            !isEmpty(containerStyle) && containerStyle
        ]}
    >
        {children}
    </View>
);

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array
    ]).isRequired,
    containerStyle: PropTypes.shape({})
};

Grid.defaultProps = {
    containerStyle: {}
};

export default Grid;
