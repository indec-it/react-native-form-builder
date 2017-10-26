import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {keys} from 'lodash';
import InputField from '@indec/react-native-md-textinput';

import colors from './colors';
import styles from './styles';

class InputTextNoAnswer extends Component {
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
        if (keys(obj)[0] !== question.name) this.setState({block: !this.state.block});
        return onChange(obj);
    }

    render() {
        const {question, answer} = this.props;
        return (
            <View style={styles.rowContainer}>
                <Text>{question.number ? `${question.number}` : ''}</Text>
                <Text>{question.text}</Text>
                {!this.state.block && <InputField
                    inputStyle={styles.input.field}
                    wrapperStyle={styles.input.wrapper}
                    labelStyle={styles.input.label}
                    maxLength={question.maxLength}
                    keyboardType="default"
                    value={answer !== null ? answer : ''}
                    onChangeText={text => this.handleChange({[question.name]: text})}
                    label={question.floatingLabel ? question.floatingLabel : ''}
                    highlightColor={colors.accent}
                />}
                {this.state.block && <Text style={{color: 'grey'}}>(Sin Nombre)</Text>}
                <Button
                    title="S/N"
                    onPress={() => this.handleChange({[`${question.name}NoAnswer`]: !this.state.block})}
                />
            </View>
        );
    }
}

export default InputTextNoAnswer;
