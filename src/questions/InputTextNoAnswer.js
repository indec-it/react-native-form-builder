import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, Button} from 'react-native';

import styles from './styles';

class InputTextNoAnswer extends Component {
    static propTypes = {
        answer: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        question: PropTypes.shape({}).isRequired
    };

    static defaultProps = {
        answer: null
    };

    constructor(props) {
        super(props);
        this.state = {block: false};
    }

    setNoAnswer() {
        const {onChange, question} = this.props;
        const {block} = this.state;
        onChange({target: {name: `${question.name}NoAnswer`, value: !block}});
        this.setState({block: !block});
    }

    handleChange(value) {
        const {onChange, question} = this.props;
        onChange({target: {name: question.name, value}});
    }

    render() {
        const {question, answer} = this.props;
        const {block} = this.state;
        return (
            <View style={styles.rowContainer}>
                <Text>{question.number ? `${question.number}` : ''}</Text>
                <Text>{question.text}</Text>
                {!block && <TextInput
                    value={answer}
                    onChangeText={text => this.handleChange(text)}
                />}
                {block && <Text style={{color: 'grey'}}>(Sin Nombre)</Text>}
                <Button
                    title="S/N"
                    onPress={() => this.setNoAnswer()}
                />
            </View>
        );
    }
}

export default InputTextNoAnswer;
