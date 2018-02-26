import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Row} from '@indec/react-native-commons';
import InputField from '@indec/react-native-md-textinput';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue, handleChange} from '../../util';
import styles from './styles';

const handlePress = ({name, ignoreValue}, answer, onChange) => (onChange({
    [name]: answer !== ignoreValue ? ignoreValue : null
}));

const isIgnored = ({ignoreValue}, answer) => answer === ignoreValue;

const TextInputOrIgnore = ({answer, question, onChange, style, textWithBadgeStyle}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textWithBadgeStyle}
            />}
            <Row>
                {isIgnored(question, answer) ? (
                    <Text>(Deshabilitado)</Text>
                ) : (
                    <Fragment>
                        <InputField
                            inputStyle={computedStyles.component.field}
                            wrapperStyle={computedStyles.component.wrapper}
                            labelStyle={computedStyles.component.label}
                            maxLength={question.maxLength}
                            keyboardType="default"
                            value={getInputValue(answer)}
                            onChangeText={text => handleChange(question.name, text, onChange)}
                            label={question.floatingLabel || ''}
                            highlightColor={computedStyles.highlightColor}
                        />
                        {question.inputUnit &&
                        <Text style={computedStyles.inputUnit}>
                            {question.inputUnit}
                        </Text>}
                    </Fragment>
                )}
                <CheckBox
                    style={computedStyles.component.checkBox}
                    onPress={() => handlePress(question, answer, onChange)}
                    checked={isIgnored(question, answer)}
                />
            </Row>
        </View>
    );
};

TextInputOrIgnore.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    style: stylePropType,
    textWithBadgeStyle: stylePropType
};

TextInputOrIgnore.defaultProps = {
    answer: null,
    style: null,
    textWithBadgeStyle: null
};

export default TextInputOrIgnore;
