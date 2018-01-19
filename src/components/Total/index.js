import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {filter, toNumber, isNil, sum, isNaN} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const getTotal = (section, question, callback) => {
    const addends = filter(
        question.fieldsToAdd,
        field => !isNil(section[field])
    ).map(
        field => toNumber(section[field])
    );

    let total = sum(addends);

    if (isNaN(total)) {
        total = 0;
    }
    if (section[question.name] === total) {
        return total;
    }

    callback({[question.name]: total});
    return total;
};

const Total = ({section, question, onChange, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <TextWithBadge question={question}/>
        <Text style={Utilities.setStyle(defaultStyles, style, 'totalLabel')}>
            {getTotal(section, question, onChange)}
        </Text>
    </View>
);

Total.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ])
};

Total.defaultProps = {
    style: null
};

export default Total;
