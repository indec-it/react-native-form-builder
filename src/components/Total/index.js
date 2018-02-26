import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {filter, toNumber, isNil, sum, isNaN} from 'lodash';

import TextWithBadge from '../TextWithBadge';
import {handleChange} from '../../util';
import styles from './styles';

const getTotal = (section, question, onChange) => {
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

    handleChange(question.name, total, onChange);
    return total;
};

const Total = ({section, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Text style={computedStyles.totalLabel}>
                {getTotal(section, question, onChange)}
            </Text>
        </View>
    );
};

Total.propTypes = {
    section: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

Total.defaultProps = {
    style: null,
    textWithBadgeStyle: null
};

export default Total;
