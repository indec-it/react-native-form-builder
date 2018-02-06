import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import {Row, Col} from '@indec/react-native-commons';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import {find, get, isNil, some, toNumber} from 'lodash';

import ComponentsRegistry from '../../ComponentsRegistry';
import {TextWithBadge} from '..';
import {types} from '../../enums';
import styles from './styles';

const getFieldValue = (answerRow, {name, options, type}) => {
    const value = toNumber(answerRow[name]);
    return (
        type === types.SELECT ? find(options, option => option.value === value).label : answerRow[name]
    );
};

export default class AddOnList extends Component {
    static propTypes = {
        answer: PropTypes.shape({}).isRequired,
        question: PropTypes.shape({
            name: PropTypes.string,
            childQuestions: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired,
        onChange: PropTypes.func.isRequired,
        style: PropTypes.shape({
            component: stylePropType,
            textWithBadge: stylePropType
        })
    };

    static defaultProps = {
        style: null
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
            '¿Desea eliminar esta declaración?',
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
        const {question, style} = this.props;
        const computedStyles = mergeStyles(styles, style);
        const registry = new ComponentsRegistry();
        return (
            <View style={computedStyles.component.container}>
                {question.text && <TextWithBadge
                    question={question}
                    style={computedStyles.textWithBadge}
                />}
                <Row>
                    {question.childQuestions.map(childQuestion => {
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
                <View style={computedStyles.component.tableContainer}>
                    {this.state.answer && this.state.answer.map((answerRow, index) => (
                        <TouchableOpacity
                            key={answerRow.toString()}
                            onPress={() => this.deleteRow(index)}
                        >
                            <Row
                                style={[
                                    computedStyles.component.rowStyle,
                                    index % 2 === 0 ? computedStyles.component.evenRowStyle : {}
                                ]}
                            >
                                {question.childQuestions.map(childQuestion => {
                                    const value = getFieldValue(answerRow, childQuestion);
                                    return (
                                        <Col key={value}>
                                            <Text style={computedStyles.component.childrenQuestionsText}>
                                                {answerRow[childQuestion.name] ? value : '-'}
                                            </Text>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}
