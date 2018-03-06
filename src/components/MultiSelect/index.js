import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {concat, includes, filter, isNil} from 'lodash';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

const getSelectedValues = (optionValue, answer) => {
    if (isNil(answer)) {
        return [optionValue];
    }
    const answerValue = includes(answer, optionValue);
    return answerValue ? filter(answer, value => value !== optionValue) : concat(answer, optionValue);
};

const MultiSelect = ({answer, question, onChange, style, textWithBadgeStyle, disabled}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            {question.options.map(
                option => (option.text ? (
                    <Text key={option.text} style={computedStyles.component.text}>
                        {option.text}
                    </Text>
                ) : (
                    <CheckBox
                        key={option.value}
                        title={option.label}
                        onPress={() => handleChange(question.name, getSelectedValues(option.value, answer), onChange)}
                        checkedIcon={computedStyles.checkedIcon}
                        uncheckedIcon={computedStyles.uncheckedIcon}
                        checked={includes(answer, option.value)}
                        disabled={disabled}
                    />
                ))
            )}
        </View>
    );
};

MultiSelect.displayName = 'multiSelect';

MultiSelect.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

MultiSelect.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default MultiSelect;
