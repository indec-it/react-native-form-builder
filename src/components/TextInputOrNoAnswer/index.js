import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {Row} from '@indec/react-native-commons';
import InputField from '@indec/react-native-md-textinput';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import {TextWithBadge} from '..';
import {getInputValue} from '../../util';
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

    handleChange(obj) {
        this.props.onChange(obj);
    }

    handleBlock(obj) {
        this.setState(() => ({block: !this.state.block}));
        this.props.onChange(obj);
    }

    render() {
        const {question, answer, style, textWithBadgeStyle, disabled} = this.props;
        const computedStyles = mergeStyles(styles, style);
        return (
            <View style={computedStyles.component.container}>
                {question.text && <TextWithBadge
                    question={question}
                    style={textWithBadgeStyle}
                />}
                <Row>
                    {!this.state.block && <InputField
                        inputStyle={computedStyles.component.field}
                        wrapperStyle={computedStyles.component.wrapper}
                        labelStyle={computedStyles.component.label}
                        maxLength={question.maxLength}
                        keyboardType="default"
                        value={getInputValue(answer)}
                        onChangeText={text => this.handleChange({[question.name]: text})}
                        label={question.floatingLabel || ''}
                        highlightColor={computedStyles.highlightColor}
                        disabled={disabled}
                    />}
                    {this.state.block &&
                    <Text style={computedStyles.component.blockedText}>
                        (Sin Nombre)
                    </Text>}
                    <Button
                        title={computedStyles.buttonTitle}
                        color={computedStyles.buttonColor}
                        onPress={() => this.handleBlock({[`${question.name}NoAnswer`]: !this.state.block})}
                        disabled={disabled}
                    />
                </Row>
            </View>
        );
    }
}

export default TextInputOrNoAnswer;
