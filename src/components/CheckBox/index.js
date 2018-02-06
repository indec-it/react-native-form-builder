import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const Checkbox = ({answer, onChange, question, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <CheckBox
                title={question.checkBoxTitle}
                style={computedStyles.component.checkBox}
                onPress={() => handleChange(question.name, !answer, onChange)}
                checked={answer}
            />
        </View>
    );
};

Checkbox.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    }),
    answer: PropTypes.bool
};

Checkbox.defaultProps = {
    style: null,
    answer: null
};

export default Checkbox;
