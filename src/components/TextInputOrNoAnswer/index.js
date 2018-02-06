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
    static propTypes = {
        question: PropTypes.shape({}).isRequired,
        onChange: PropTypes.func.isRequired,
        style: PropTypes.shape({
            component: stylePropType,
            textWithBadge: stylePropType
        }),
        answer: PropTypes.string
    };

    static defaultProps = {
        style: null,
        answer: null
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
        const {question, answer, style} = this.props;
        const computedStyles = mergeStyles(styles, style);
        return (
            <View style={computedStyles.component.style.container}>
                {question.text && <TextWithBadge
                    question={question}
                    style={computedStyles.textWithBadge}
                />}
                <Row>
                    {!this.state.block && <InputField
                        inputStyle={computedStyles.component.style.field}
                        wrapperStyle={computedStyles.component.style.wrapper}
                        labelStyle={computedStyles.component.style.label}
                        maxLength={question.maxLength}
                        keyboardType="default"
                        value={getInputValue(answer)}
                        onChangeText={text => this.handleChange({[question.name]: text})}
                        label={question.floatingLabel || ''}
                        highlightColor={computedStyles.component.highlightColor}
                    />}
                    {this.state.block &&
                    <Text style={computedStyles.component.style.blockedText}>
                        (Sin Nombre)
                    </Text>}
                    <Button
                        title={computedStyles.component.buttonTitle}
                        color={computedStyles.component.buttonColor}
                        onPress={() => this.handleBlock({[`${question.name}NoAnswer`]: !this.state.block})}
                    />
                </Row>
            </View>
        );
    }
}

export default TextInputOrNoAnswer;
