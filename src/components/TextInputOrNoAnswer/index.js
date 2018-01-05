import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import InputField from '@indec/react-native-md-textinput';
import {keys} from 'lodash';

import styles from './styles';

class TextInputOrNoAnswer extends Component {
    static propTypes = {
        question: PropTypes.shape({}).isRequired,
        onChange: PropTypes.func.isRequired,
        answer: PropTypes.string
    };

    static defaultProps = {
        answer: null
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
        const {question, answer} = this.props;
        return (
            <View style={styles.container}>
                <Text>{question.number ? `${question.number}` : ''}</Text>
                <Text>{question.text}</Text>
                {!this.state.block && <InputField
                    inputStyle={styles.field}
                    wrapperStyle={styles.wrapper}
                    labelStyle={styles.label}
                    maxLength={question.maxLength}
                    keyboardType="default"
                    value={answer !== null ? answer : ''}
                    onChangeText={text => this.handleChange({[question.name]: text})}
                    label={question.floatingLabel ? question.floatingLabel : ''}
                    highlightColor="#ff4281"
                />}
                {this.state.block && <Text style={styles.blockedText}>(Sin Nombre)</Text>}
                <Button
                    title="S/N"
                    onPress={() => this.handleChange({[`${question.name}NoAnswer`]: !this.state.block})}
                />
            </View>
        );
    }
}

export default TextInputOrNoAnswer;
