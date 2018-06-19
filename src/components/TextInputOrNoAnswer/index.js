import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {Row} from '@indec/react-native-commons';
import InputField from '@indec/react-native-md-textinput';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue, handleChangeText} from '../../util';
import styles from './styles';

class TextInputOrNoAnswer extends Component {
    static displayName = 'textInputOrNoAnswer';

    static propTypes = {
        question: PropTypes.shape({}).isRequired,
        onChange: PropTypes.func.isRequired,
        answer: PropTypes.string,
        style: stylePropType,
        textWithBadgeStyle: stylePropType,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        answer: null,
        style: null,
        textWithBadgeStyle: null,
        disabled: false
    };

    constructor(props) {
        super(props);
        this.state = {block: false};
    }

    handleBlock() {
        const {onChange, question} = this.props;
        const {block} = this.state;
        this.setState(() => ({block: !block}));
        onChange({
            [`${question.name}NoAnswer`]: !block
        });
    }

    render() {
        const {
            answer, disabled, onChange, question, style, textWithBadgeStyle
        } = this.props;
        const {block} = this.state;
        const computedStyles = mergeStyles(styles, style);
        return (
            <View style={computedStyles.component.container}>
                {question.text && <TextWithBadge
                    question={question}
                    style={textWithBadgeStyle}
                />}
                <Row>
                    {!block && <InputField
                        inputStyle={computedStyles.component.field}
                        wrapperStyle={computedStyles.component.wrapper}
                        labelStyle={computedStyles.component.label}
                        maxLength={question.maxLength}
                        keyboardType="default"
                        value={getInputValue(answer)}
                        onChangeText={text => handleChangeText(question, text, onChange)}
                        label={question.floatingLabel || ''}
                        highlightColor={computedStyles.highlightColor}
                        autoFocus={question.autoFocus}
                        disabled={disabled}
                    />}
                    {block &&
                    <Text style={computedStyles.component.blockedText}>
                        (Sin Nombre)
                    </Text>}
                    <Button
                        title={computedStyles.buttonTitle}
                        color={computedStyles.buttonColor}
                        onPress={() => this.handleBlock()}
                        disabled={disabled}
                    />
                </Row>
            </View>
        );
    }
}

export default TextInputOrNoAnswer;
