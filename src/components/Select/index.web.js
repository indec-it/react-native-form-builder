import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import {types} from '../../enums';
import styles from './styles';

const PLACEHOLDER_VALUE = 'placeholder';

const Select = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <select
                value={answer || (question.placeholder ? PLACEHOLDER_VALUE : question.options[0].value)}
                onChange={e => handleChange(question.name, e.target.value, onChange)}
                disabled={disabled}
            >
                {question.placeholder &&
                <option value={PLACEHOLDER_VALUE}>
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

Select.displayName = types.SELECT;

Select.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.number,
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

Select.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default Select;
