import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const PLACEHOLDER_VALUE = 'placeholder';
const generateList = ({options, placeholder}) => {
    const placeholderOption = {value: PLACEHOLDER_VALUE, label: placeholder};
    const optionsWithPLaceholder = options;
    if (placeholder) optionsWithPLaceholder.insert(0, placeholderOption);
    return optionsWithPLaceholder;
};
const Select = ({answer, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Picker
                selectedValue={answer || (question.placeholder ? PLACEHOLDER_VALUE : question.options[0].value)}
                style={computedStyles.picker}
                onValueChange={itemValue => handleChange(question.name, itemValue, onChange)}
            >
                {generateList(question).map(option => (
                    <Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                    />
                ))}
            </Picker>
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
