import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Row} from '@indec/react-native-commons';
import InputField from '@indec/react-native-md-textinput';
import {CheckBox} from 'react-native-elements';
import {toNumber} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const handlePress = ({name, ignoreValue}, answer, onChange) => (onChange({
    [name]: answer !== ignoreValue ? ignoreValue : null
}));

const isIgnored = ({ignoreValue}, answer) => answer === ignoreValue;

const DecimalInputOrIgnore = ({answer, question, onChange, style, textStyle, badgeStyle, textBoxStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textStyle}
                badgeStyle={badgeStyle}
                textBoxStyle={textBoxStyle}
            />}
            <Row>
                {isIgnored(question, answer) ?
                    <Text>(Deshabilitado)</Text>
                    :
                    <InputField
                        inputStyle={styles.field}
                        wrapperStyle={styles.wrapper}
                        labelStyle={styles.label}
                        maxLength={question.maxLength}
                        max={question.max}
                        min={question.min}
                        keyboardType="numeric"
                        value={Utilities.getInputValue(answer)}
                        onChangeText={text => Utilities.handleChange(question.name, text, onChange, toNumber)}
                        label={question.floatingLabel || ''}
                        highlightColor="#ff4281"
                    />
                }
                {question.inputUnit &&
                <Text style={styles.inputUnit}>
                    {question.inputUnit}
                </Text>}
                <CheckBox
                    style={styles.checkBox}
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
    style: Utilities.getStyleProps(),
    badgeStyle: Utilities.getStyleProps(),
    textStyle: Utilities.getStyleProps(),
    textBoxStyle: Utilities.getStyleProps(),
    answer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};

DecimalInputOrIgnore.defaultProps = {
    style: null,
    badgeStyle: null,
    textStyle: null,
    textBoxStyle: null,
    answer: null
};

export default DecimalInputOrIgnore;
