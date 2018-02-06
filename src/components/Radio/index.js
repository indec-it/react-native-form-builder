import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {isEqual} from 'lodash';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const Radio = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.style.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            {question.options.map(
                option => (option.text ? (
                    <Text key={option.text} style={computedStyles.component.style.text}>
                        {option.text}
                    </Text>
                ) : (
                    <CheckBox
                        key={option.value}
                        title={option.label}
                        onPress={() => handleChange(question.name, option.value, onChange)}
                        checkedIcon={computedStyles.component.checkedIcon}
                        uncheckedIcon={computedStyles.component.uncheckedIcon}
                        checked={isEqual(answer, option.value)}
                    />
                ))
            )}
        </View>
    );
};

Radio.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    }),
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

Radio.defaultProps = {
    answer: null,
    style: null
};

export default Radio;
