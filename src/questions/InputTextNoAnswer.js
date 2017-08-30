import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, Button} from 'react-native';

import styles from './styles';

class InputTextNoAnswer extends Component {
    static propTypes = {
        section: PropTypes.shape({}).isRequired,
        question: PropTypes.shape({}).isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {block: false};
    }

    handleChange(obj) {
        const {onChange, section, question} = this.props;
        if (Object.keys(obj)[0] !== question.name) this.setState({block: !this.state.block});
        return onChange({[section.name]: obj});
    }

    render() {
        const {question, section} = this.props;
        const answer = section[question.name];
        return (
            <View style={styles.rowContainer}>
                <Text>{question.number ? `${question.number}` : ''}</Text>
                <Text>{question.text}</Text>
                {!this.state.block && <TextInput
                    value={answer}
                    onChangeText={text => this.handleChange({[question.name]: text})}
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
