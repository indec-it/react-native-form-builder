import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {isEqual} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const Radio = ({answer, question, onChange, style, badgeStyle, textStyle, textBoxStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textStyle}
                badgeStyle={badgeStyle}
                textBoxStyle={textBoxStyle}
            />}
            {question.options.map(
                option => (option.text ? (
                    <Text key={option.text} style={styles.text}>
                        {option.text}
                    </Text>
                ) : (
                    <CheckBox
                        key={option.value}
                        title={option.label}
                        checkedIcon="dot-circle-o"
                        onPress={() => Utilities.handleChange(question.name, option.value, onChange)}
                        uncheckedIcon="circle-o"
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
    style: Utilities.getStyleProps(),
    badgeStyle: Utilities.getStyleProps(),
    textStyle: Utilities.getStyleProps(),
    textBoxStyle: Utilities.getStyleProps(),
    answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

Radio.defaultProps = {
    answer: null,
    style: null,
    badgeStyle: null,
    textStyle: null,
    textBoxStyle: null
};

export default Radio;
