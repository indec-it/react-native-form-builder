import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {isEqual} from 'lodash';

import {TextWithBadge} from '..';
import {handleChange} from '../../util';
import styles from './styles';

const RadioSections = ({answer, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            {question.options.map(option => (
                option.section ? (
                    <Text
                        key={option.section}
                        style={computedStyles.component.sectionTitle}
                    >
                        {option.section}
                    </Text>
                ) : (
                    <CheckBox
                        key={option.value}
                        title={option.label}
                        onPress={() => handleChange(question.name, option.value, onChange)}
                        checkedIcon={computedStyles.checkedIcon}
                        uncheckedIcon={computedStyles.uncheckedIcon}
                        checked={isEqual(answer, option.value)}
                    />
                )
            ))}
        </View>
    );
};

RadioSections.displayName = 'radioSections';

RadioSections.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

RadioSections.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null
};

export default RadioSections;
