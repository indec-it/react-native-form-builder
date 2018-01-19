import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {keys} from 'lodash';

import Utilities from '../util';
import TextInput from '../TextInput';
import defaultStyles from './styles';

class TextInputOrNoAnswer extends Component {
    static propTypes = {
        question: PropTypes.shape({}).isRequired,
        style: PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ]),
        inputStyle: PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ]),
        onChange: PropTypes.func.isRequired,
        answer: PropTypes.string
    };

    static defaultProps = {
        answer: null,
        inputStyle: null,
        style: null
    };

    constructor(props) {
        super(props);
        this.state = {block: false};
    }

    handleChange(obj) {
        const {onChange, question} = this.props;
        if (keys(obj)[0] !== question.name) {
            this.setState(() => ({block: !this.state.block}));
        }
        return onChange(obj);
    }

    render() {
        const {question, answer, inputStyle, style} = this.props;
        return (
            <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
                <Text>{question.number ? `${question.number}` : ''}</Text>
                <Text>{question.text}</Text>
                {!this.state.block && <TextInput
                    answer={answer}
                    question={question}
                    onChange={text => this.handleChange(text)}
                    style={inputStyle}
                />}
                {this.state.block &&
                <Text style={Utilities.setStyle(defaultStyles, style, 'blockedText')}>
                    (Sin Nombre)
                </Text>}
                <Button
                    title="S/N"
                    onPress={() => this.handleChange({[`${question.name}NoAnswer`]: !this.state.block})}
                />
            </View>
        );
    }
}

export default TextInputOrNoAnswer;
