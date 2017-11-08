import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

const Col = ({children, flexSize}) => (
    <View style={flexSize ? [{flex: flexSize}, styles.withFlexSize] : styles.withoutFlexSize}>
        {children}
    </View>
);

Col.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array
    ]).isRequired,
    flexSize: PropTypes.number
};

Col.defaultProps = {
    flexSize: null
};

export default Col;
