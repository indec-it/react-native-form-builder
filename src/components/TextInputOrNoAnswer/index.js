import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {keys} from 'lodash';

import Utilities from '../util';
import TextInput from '../TextInput';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

class TextInputOrNoAnswer extends Component {
    static propTypes = {
        question: PropTypes.shape({}).isRequired,
        onChange: PropTypes.func.isRequired,
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
        badgeStyle: PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ]),
        textStyle: PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ]),
        answer: PropTypes.string
    };

    static defaultProps = {
        answer: null,
        inputStyle: null,
        style: null,
        badgeStyle: null,
        textStyle: null
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
        const {question, answer, inputStyle, style, textStyle, badgeStyle} = this.props;
        const styles = Utilities.setStyles(defaultStyles, style);
        return (
            <View style={styles.container}>
                {this.state.block && question.text && <TextWithBadge
                    question={question}
                    style={textStyle}
                    badgeStyle={badgeStyle}
                />}
                {!this.state.block && <TextInput
                    answer={answer}
                    question={question}
                    onChange={text => this.handleChange(text)}
                    style={inputStyle}
                    badgeStyle={badgeStyle}
                    textStyle={textStyle}
                />}
                {this.state.block &&
                <Text style={styles.blockedText}>
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
