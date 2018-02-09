import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';
import LapelGroup from '../LapelGroup';
import Form from '../Form';

export default class FormGroup extends Component {
    static propTypes = {
        question: PropTypes.shape({
            name: PropTypes.string.isRequired,
            lapelsAmount: PropTypes.string,
            lapelsRef: PropTypes.arrayOf(PropTypes.shape({})),
            form: PropTypes.shape({}).isRequired,
            lapelTemplate: PropTypes.string.isRequired
        }).isRequired,
        onChange: PropTypes.func.isRequired,
        style: stylePropType,
        section: PropTypes.shape({}).isRequired
    };

    static defaultProps = {
        style: null
    };

    constructor(props) {
        super(props);
        this.state = {
            answer: props.section[props.question.name] ? props.section[props.question.name] : []
        };
    }

    getLapelGroupQuestion() {
        const {question, section} = this.props;
        const lapelsAmount = question.lapelsAmount > 0 ? question.lapelsAmount : section[question.lapelsRef];
        const lapels = [];
        while (lapels.length < lapelsAmount) {
            lapels.push({id: lapels.length, name: question.lapelTemplate + (lapels.length + 1)});
        }
        return {lapels, name: 'selectedLapel'};
    }

    handleChanges(changes) {
        const {selectedLapel, answer} = this.state;
        let currentAnswer = answer[selectedLapel] ? answer[selectedLapel] : {};
        currentAnswer = Object.assign(currentAnswer, changes[this.props.question.name]);
        answer[selectedLapel] = currentAnswer;
        this.props.onChange({[this.props.question.name]: answer});
    }

    render() {
        const {question, style} = this.props;
        const {selectedLapel} = this.state;
        const computedStyles = mergeStyles(styles, style);
        const lapelGroup = this.getLapelGroupQuestion();
        const currentFormAnswer = this.state.answer[selectedLapel];
        return (
            <View style={computedStyles.container}>
                <LapelGroup
                    answer={selectedLapel}
                    question={lapelGroup}
                    onChange={selected => this.setState(selected)}
                />
                {lapelGroup.lapels && selectedLapel < lapelGroup.lapels.length && <Form
                    answer={currentFormAnswer}
                    question={question}
                    onChange={changes => this.handleChanges(changes)}
                />}
            </View>
        );
    }
}
