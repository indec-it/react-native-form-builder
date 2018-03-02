import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import {Row, Col} from '@indec/react-native-commons';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import lang from 'lodash/lang';
import {filter, find, get, isString, isNumber, toNumber, isNaN, some, every, isNil} from 'lodash';

import ComponentsRegistry from '../../ComponentsRegistry';
import {TextWithBadge} from '..';
import {types, operators} from '../../enums';
import styles from './styles';

const getFieldValue = (answerRow, question) => {
    let value = answerRow[question.name];
    switch (question.type) {
        case types.SELECT:
            if (isNumber(question.options[0].value) && isString(value) && !isNaN(toNumber(value))) {
                value = toNumber(value);
            }
            return find(question.options, {value}).label;
        default:
            return value;
    }
};


const normalizeInt = value => {
    let tmpValue = value;
    if (isString(tmpValue) && !isNaN(toNumber(tmpValue))) {
        tmpValue = toNumber(tmpValue);
    }
    return tmpValue;
};


const canDrawQuestion = ({parents}, chapter) => {
    if (!parents) {
        return true;
    }
    return every(
        parents.map(parent => {
            let refValue = parent.value;
            let actualValue = chapter[parent.id];
            switch (parent.type) {
                case operators.EXISTS:
                    return !isNil(chapter[parent.id]) === parent.value;
                case operators.NOT_EQUALS:
                    return !lang.eq(chapter[parent.id], parent.value);

                case operators.GREATER_THAN:
                    refValue = normalizeInt(refValue);
                    actualValue = normalizeInt(actualValue);
                    return lang.gt(actualValue, refValue);

                case operators.LESS_THAN:
                    refValue = normalizeInt(refValue);
                    actualValue = normalizeInt(actualValue);
                    return lang.lt(actualValue, refValue);

                default:
                    return lang[parent.type](chapter[parent.id], parent.value);
            }
        }),
        status => status === true
    );
};


export default class AddOnList extends Component {
    static displayName = 'addOnList';

    static propTypes = {
        question: PropTypes.shape({
            name: PropTypes.string,
            childQuestions: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired,
        onChange: PropTypes.func.isRequired,
        answer: PropTypes.shape({}),
        style: stylePropType,
        textWithBadgeStyle: stylePropType
    };

    static defaultProps = {
        answer: null,
        style: null,
        textWithBadgeStyle: null
    };

    constructor(props) {
        super(props);
        this.state = {
            componentAnswers: {},
            answer: props.answer || []
        };
    }

    someQuestionsAreNil() {
        return some(this.props.question.childQuestions, question => isNil(
            get(this.state.componentAnswers, question.name, null)
        ));
    }

    addToList() {
        if (this.someQuestionsAreNil()) {
            ToastAndroid.show('Seleccione todos los elementos', ToastAndroid.SHORT);
            return;
        }

        this.state.answer.push(this.state.componentAnswers);
        this.props.onChange({
            [this.props.question.name]: this.state.answer
        });
        this.setState(() => ({
            componentAnswers: {}
        }));
    }

    deleteRow(index) {
        Alert.alert(
            'Eliminar',
            '¿Desea eliminar esta declaracion?',
            [{
                text: 'Cancelar'
            }, {
                text: 'Eliminar',
                onPress: () => {
                    this.state.answer.splice(index, 1);
                    this.props.onChange({
                        [this.props.question.name]: this.state.answer
                    });
                }
            }]
        );
    }


    render() {
        const {question, style, textWithBadgeStyle} = this.props;
        const computedStyles = mergeStyles(styles, style);
        const registry = new ComponentsRegistry();
        return (
            <View style={computedStyles.container}>
                {question.text && <TextWithBadge
                    question={question}
                    style={textWithBadgeStyle}
                />}
                <Row>
                    {filter(
                        this.props.question.childQuestions,
                        childQuestion => canDrawQuestion(childQuestion, this.state.componentAnswers)
                    ).map(childQuestion => {
                        const QuestionComponent = registry.get(childQuestion.type);
                        return (
                            <QuestionComponent
                                key={childQuestion.name.toString()}
                                answer={this.state.componentAnswers[childQuestion.name]}
                                question={childQuestion}
                                onChange={answer => this.setState(state => ({
                                    componentAnswers: Object.assign({}, state.componentAnswers, answer)
                                }))}
                            />
                        );
                    })}
                </Row>
                <Button
                    title="AGREGAR"
                    onPress={() => this.addToList()}
                />
                <View style={computedStyles.tableContainer}>
                    {this.state.answer && this.state.answer.map((answerRow, index) => {
                        const indexKey = `answerRow-${index}`;
                        return (
                            <TouchableOpacity
                                key={indexKey}
                                onPress={() => this.deleteRow(index)}
                            >
                                <Row
                                    style={[
                                        computedStyles.row,
                                        index % 2 === 0 ? computedStyles.evenRow : {}
                                    ]}
                                >
                                    {question.childQuestions.map((childQuestion, childQuestionIndex) => {
                                        const value = getFieldValue(answerRow, childQuestion);
                                        const childQuestionKey = `childrenQuestion-${childQuestionIndex}`;
                                        return (
                                            <Col key={childQuestionKey}>
                                                <Text style={computedStyles.childrenQuestionsText}>
                                                    {answerRow[childQuestion.name] ? value : '-'}
                                                </Text>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
}
