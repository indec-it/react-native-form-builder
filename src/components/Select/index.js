import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import {types} from '../../enums';
import styles from './styles';
import commonStyles from '../commonStyles';

const Select = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.component.container}>
            {question.text && (
                <TextWithBadge question={question} style={textWithBadgeStyle}/>
            )}
            <View style={computedStyles.component.picker}>
                <Picker
                    selectedValue={answer}
                    onValueChange={itemValue => handleChange(question.name, itemValue, onChange)}
                    enabled={!disabled}
                >
                    {question.options.map(option => (
                        <Picker.Item key={option.value} label={option.label} value={option.value}/>
                    ))}
                </Picker>
            </View>
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
