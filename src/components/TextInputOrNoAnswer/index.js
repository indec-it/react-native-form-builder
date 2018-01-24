import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';
import {Row} from '@indec/react-native-commons';
import InputField from '@indec/react-native-md-textinput';
import {keys} from 'lodash';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

class TextInputOrNoAnswer extends Component {
    static propTypes = {
        question: PropTypes.shape({}).isRequired,
        onChange: PropTypes.func.isRequired,
        style: Utilities.getStyleProps(),
        badgeStyle: Utilities.getStyleProps(),
        textStyle: Utilities.getStyleProps(),
        textBoxStyle: Utilities.getStyleProps(),
        answer: PropTypes.string
    };

    static defaultProps = {
        style: null,
        badgeStyle: null,
        textStyle: null,
        textBoxStyle: null,
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
        const {question, answer, style, textStyle, badgeStyle, textBoxStyle} = this.props;
        const styles = Utilities.setStyles(defaultStyles, style);
        return (
            <View style={styles.container}>
                {question.text && <TextWithBadge
                    question={question}
                    style={textStyle}
                    badgeStyle={badgeStyle}
                    textBoxStyle={textBoxStyle}
                />}
                <Row>
                    {!this.state.block && <InputField
                        inputStyle={styles.field}
                        wrapperStyle={styles.wrapper}
                        labelStyle={styles.label}
                        maxLength={question.maxLength}
                        keyboardType="default"
                        value={Utilities.getInputValue(answer)}
                        onChangeText={text => this.handleChange({[question.name]: text})}
                        label={question.floatingLabel || ''}
                        highlightColor="#ff4281"
                    />}
                    {this.state.block &&
                    <Text style={styles.blockedText}>
                        (Sin Nombre)
                    </Text>}
                    <Button
                        title="S/N"
                        onPress={() => this.handleChange({[`${question.name}NoAnswer`]: !this.state.block})}
                    />
                </Row>
            </View>
        );
    }
}

export default TextInputOrNoAnswer;
