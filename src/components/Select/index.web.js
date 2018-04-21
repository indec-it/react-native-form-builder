import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const Select = ({answer, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <select
                value={answer}
                onChange={e => handleChange(question.name, e.target.value, onChange)}
            >
                {question.placeholder &&
                <option value={null}>
                    {question.placeholder}
                </option>}
                {question.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </View>
    );
};

Select.displayName = 'select';

Select.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.number,
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

Select.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null
};

export default Select;
