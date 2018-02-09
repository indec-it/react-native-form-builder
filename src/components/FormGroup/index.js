import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {times} from 'lodash';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import Tabs from '../Tabs';
import Form from '../Form';
import styles from './styles';


class FormGroup extends Component {
    static propTypes = {
        question: PropTypes.shape({
            name: PropTypes.string.isRequired,
            tabsAmount: PropTypes.string,
            tabsRef: PropTypes.arrayOf(PropTypes.shape({})),
            tabTemplate: PropTypes.string.isRequired
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
            answer: props.section[props.question.name] || []
        };
    }

    getTabQuestions = () => {
        const {question, section} = this.props;
        const tabsAmount = question.tabsAmount > 0 ? question.tabsAmount : section[question.tabsRef];
        const tabQuestions = [];
        times(tabsAmount - 1, () => {
            tabQuestions.map(() => ({id: tabQuestions.length, name: question.tabTemplate + (tabQuestions.length + 1)}));
        });
        return {tabQuestions, name: 'selected'};
    };

    handleChanges = changes => {
        const {selectedTab, answer} = this.state;
        let currentAnswer = answer[selectedTab] ? answer[selectedTab] : {};
        currentAnswer = Object.assign(currentAnswer, changes[this.props.question.name]);
        answer[selectedTab] = currentAnswer;
        this.props.onChange({[this.props.question.name]: answer});
    };

    render() {
        const {selectedTab} = this.state;
        const currentChapter = this.state.answer[selectedTab];
        const tabQuestions = this.getTabQuestions();
        const computedStyles = mergeStyles(styles, this.props.style);
        return (
            <View style={computedStyles.container}>
                <Tabs
                    answer={selectedTab || []}
                    question={tabQuestions}
                    onChange={selected => this.setState(selected)}
                />
                {tabQuestions.tabs && currentChapter < tabQuestions.tabs.length && <Form
                    answer={currentChapter}
                    question={this.props.question}
                    onChange={changes => this.handleChanges(changes)}
                />}
            </View>
        );
    }
}

export default FormGroup;
