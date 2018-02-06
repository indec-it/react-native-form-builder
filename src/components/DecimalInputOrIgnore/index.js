import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Row} from '@indec/react-native-commons';
import InputField from '@indec/react-native-md-textinput';
import {CheckBox} from 'react-native-elements';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {toNumber} from 'lodash';

import {TextWithBadge} from '..';
import {getInputValue, handleChange} from '../../util';
import styles from './styles';

const handlePress = ({name, ignoreValue}, answer, onChange) => (onChange({
    [name]: answer !== ignoreValue ? ignoreValue : null
}));

const isIgnored = ({ignoreValue}, answer) => answer === ignoreValue;

const DecimalInputOrIgnore = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.component.style.container}>
            {question.text && <TextWithBadge
                question={question}
                style={computedStyles.textWithBadge}
            />}
            <Row>
                {isIgnored(question, answer) ? (
                    <Text>(Deshabilitado)</Text>
                ) : (
                    <Fragment>
                        <InputField
                            inputStyle={computedStyles.component.style.field}
                            wrapperStyle={computedStyles.component.style.wrapper}
                            labelStyle={computedStyles.component.style.label}
                            maxLength={question.maxLength}
                            max={question.max}
                            min={question.min}
                            keyboardType="numeric"
                            value={getInputValue(answer)}
                            onChangeText={text => handleChange(question.name, text, onChange, toNumber)}
                            label={question.floatingLabel || ''}
                            highlightColor={computedStyles.component.highlightColor}
                        />
                        {question.inputUnit &&
                        <Text style={computedStyles.component.style.inputUnit}>
                            {question.inputUnit}
                        </Text>}
                    </Fragment>
                )}
                <CheckBox
                    style={computedStyles.component.style.checkBox}
                    onPress={() => handlePress(question, answer, onChange)}
                    checked={isIgnored(question, answer)}
                />
            </Row>
        </View>
    );
};

DecimalInputOrIgnore.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
        component: stylePropType,
        textWithBadge: stylePropType
    }),
    answer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};

DecimalInputOrIgnore.defaultProps = {
    style: null,
    answer: null
};

export default DecimalInputOrIgnore;
