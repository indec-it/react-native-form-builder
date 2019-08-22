import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {isEqual, map} from 'lodash';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import {types} from '../../enums';
import commonStyles from '../commonStyles';
import styles from './styles';

const Radio = ({
    answer, question, onChange, style, textWithBadgeStyle, disabled
}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={disabled ? commonStyles.disabled.container : computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            {map(question.options,
                option => (option.text ? (
                    <Text key={option.text} style={computedStyles.component.text}>
                        {option.text}
                    </Text>
                ) : (
                    <CheckBox
                        key={option.value}
                        title={option.label}
                        onPress={() => handleChange(question.name, option.value, onChange)}
                        checkedIcon={computedStyles.checkedIcon}
                        uncheckedIcon={computedStyles.uncheckedIcon}
                        checked={isEqual(answer, option.value)}
                        disabled={disabled}
                    />
                ))
            )}
        </View>
    );
};

Radio.displayName = types.RADIO;

Radio.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string,
        name: PropTypes.string,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                value: PropTypes.string,
                label: PropTypes.string
            })
        )
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType,
    disabled: PropTypes.bool
};

Radio.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null,
    disabled: false
};

export default Radio;
