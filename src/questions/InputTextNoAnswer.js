import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, Button} from 'react-native';

import styles from './styles';

const handleChange = (value, callback) => callback({target: {name: question.name, value}});

const setNoAnswer = (value, callback) => {
    callback({target: {name: question.name, value}});
    callback({target: {name: `${question.name}NoAnswer`, value: true}});
};

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
        this.state = {block: false}
    }

    render() {
        const {question, answer, onChange} = this.props;
        return (
            <View style={styles.rowContainer}>
                <Text>{question.number ? `${question.number}` : ''}</Text>
                <Text>{question.text}</Text>
                {!this.state.block && <TextInput
                    value={answer}
                    onChangeText={text => handleChange(text, onChange)}
                />}
                {this.state.block && <Text style={{color: 'grey'}}>{answer}</Text>}
                <Button
                    title="S/N"
                    onPress={() => setNoAnswer(question.disableValue, onChange)}
                />
            </View>
        );
    }
}

export default InputTextNoAnswer;
