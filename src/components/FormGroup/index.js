import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {times} from 'lodash';

import {handleChange} from '../../util';
import Tabs from '../Tabs';
import Form from '../Form';
import styles from './styles';


const getTabQuestion = () => {
    const {question, section} = this.props;
    const tabsAmount = question.tabsAmount > 0 ? question.tabsAmount : section[question.tabsRef];
    const tabs = [];
    times(tabsAmount - 1, () => {
        tabs.push({id: tabs.length, name: question.tabTemplate + (tabs.length + 1)});
    });
    return {tabs, name: 'selected'};
};

const FormGroup = ({question, onChange, style, section}) => {
    const currentAnswer = section[question.name] || [];
    const questions = getTabQuestion;
    const computedStyles = mergeStyles(styles, style);
    return (
        <View style={computedStyles.container}>
            <Tabs
                answer={currentAnswer}
                question={questions}
                onChange={selected => this.setState(selected)}
            />
            {questions.tabs && currentAnswer < questions.tabs.length &&
            <Form
                answer={this.state.answer[currentAnswer]}
                question={question}
                onChange={changes => handleChange(question.name, changes, onChange)}
            />}
        </View>
    );
};

FormGroup.propTypes = {
    question: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tabsAmount: PropTypes.string,
        tabsRef: PropTypes.arrayOf(PropTypes.shape({})),
        form: PropTypes.shape({}).isRequired,
        tabTemplate: PropTypes.string.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType,
    section: PropTypes.shape({}).isRequired
};

FormGroup.defaultProps = {
    style: null
};

export default FormGroup;
