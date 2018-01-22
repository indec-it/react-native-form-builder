import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import {concat} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';


const addPlaceholder = (options, placeholder) =>
    (placeholder ? concat({label: placeholder, value: null}, options) : options);

const Select = ({answer, question, onChange, style, badgeStyle, textStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge question={question} style={textStyle} badgeStyle={badgeStyle}/>}
            <Picker
                selectedValue={answer}
                style={styles.picker}
                onValueChange={itemValue => Utilities.handleChange(question.name, itemValue, onChange)}
            >
                {addPlaceholder(question.options, question.placeholder).map(option => (
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
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    badgeStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    textStyle: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    answer: PropTypes.number
};

Select.defaultProps = {
    answer: null,
    style: null,
    badgeStyle: null,
    textStyle: null
};

export default Select;
