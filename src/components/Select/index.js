import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const Select = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <Picker
                selectedValue={answer}
                style={computedStyles.component.picker}
                onValueChange={itemValue => handleChange(question.name, itemValue, onChange)}
            >
                {question.placeholder && <Picker.Item label={question.placeholder} value={null}/>}
                {question.options.map(option => (
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

Select.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    }),
    answer: PropTypes.number
};

Select.defaultProps = {
    style: null,
    answer: null
};

export default Select;
