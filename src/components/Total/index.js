import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {filter, toNumber, isNil, sum, isNaN} from 'lodash';

import TextWithBadge from '../TextWithBadge';
import styles from './styles';

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

const Total = ({section, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <Text style={computedStyles.component.totalLabel}>
                {getTotal(section, question, onChange)}
            </Text>
        </View>
    );
};

Total.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    })
};

Total.defaultProps = {
    style: null
};

export default Total;
