import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import commonStyles from '../commonStyles';
import styles from './styles';

const Checkbox = ({
    answer, onChange, question, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabledContainer : computedStyles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <CheckBox
                title={question.checkBoxTitle}
                style={computedStyles.checkBox}
                onPress={() => handleChange(question.name, !answer, onChange)}
                checked={answer}
                disabled={disabled}
            />
        </View>
    );
};

Checkbox.displayName = 'checkbox';

Checkbox.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.bool,
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

Checkbox.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default Checkbox;
