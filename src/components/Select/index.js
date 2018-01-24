import React from 'react';
import PropTypes from 'prop-types';
import {Picker, View} from 'react-native';
import {concat} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';


const addPlaceholder = (options, placeholder) =>
    (placeholder ? concat({label: placeholder, value: null}, options) : options);

const Select = ({answer, question, onChange, style, badgeStyle, textStyle, textBoxStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textStyle}
                badgeStyle={badgeStyle}
                textBoxStyle={textBoxStyle}
            />}
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
    style: Utilities.getStyleProps(),
    badgeStyle: Utilities.getStyleProps(),
    textStyle: Utilities.getStyleProps(),
    textBoxStyle: Utilities.getStyleProps(),
    answer: PropTypes.number
};

Select.defaultProps = {
    style: null,
    badgeStyle: null,
    textStyle: null,
    textBoxStyle: null,
    answer: null
};

export default Select;
