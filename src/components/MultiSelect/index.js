import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {concat, includes, isNil, filter, map, reject} from 'lodash';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import {types} from '../../enums';
import questionPropType from '../../util/questionPropType';
import commonStyles from '../commonStyles';
import styles from './styles';

const getSelectedValues = (optionValue, answer) => {
    if (isNil(answer)) {
        return [optionValue];
    }
    return includes(answer, optionValue)
        ? reject(answer, value => value === optionValue)
        : concat(answer, optionValue);
};

const getExclusiveOptionValues = options => map(
    filter(options, option => option.exclusive),
    option => option.value
);

const handleChangeAnswer = (question, option, answer, onChange) => {
    if (option.exclusive) {
        handleChange(question.name, [option.value], onChange);
        return;
    }
    const exclusiveValues = getExclusiveOptionValues(question.options);
    const answers = filter(
        getSelectedValues(option.value, answer),
        value => !includes(exclusiveValues, value)
    );
    handleChange(question.name, answers, onChange);
};

const MultiSelect = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.component.container}>
            {question.text && <TextWithBadge question={question} style={textWithBadgeStyle}/>}
            {question.options.map(
                option => (option.text ? (
                    <Text key={option.text} style={computedStyles.component.text}>
                        {option.text}
                    </Text>
                ) : (
                    <CheckBox
                        key={option.value}
                        title={option.label}
                        onPress={() => handleChangeAnswer(question, option, answer, onChange)}
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

MultiSelect.displayName = types.MULTI_SELECT;

MultiSelect.propTypes = {
    question: questionPropType.isRequired,
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
