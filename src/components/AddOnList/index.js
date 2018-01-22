import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import {Row, Col} from '@indec/react-native-commons';
import {find, get, isNil, some, toNumber} from 'lodash';

import ComponentsMapper from '../../ComponentsMapper';
import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';
import {types} from '../../enums';

const getFieldValue = (answerRow, {name, options, type}) => (
    type === types.SELECT ? find(options, option => option.value === toNumber(answerRow[name])).label : answerRow[name]
);

export default class AddOnList extends Component {
    static propTypes = {
        answer: PropTypes.shape({}).isRequired,
        question: PropTypes.shape({
            name: PropTypes.string,
            childQuestions: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired,
        onChange: PropTypes.func.isRequired,
        style: PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ]),
        badgeStyle: PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ]),
        textStyle: PropTypes.oneOfType([
            PropTypes.shape({}),
            PropTypes.array,
            PropTypes.number
        ])
    };

    static defaultProps = {
        style: null,
        badgeStyle: null,
        textStyle: null
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
        const {question, textStyle, badgeStyle} = this.props;
        const styles = Utilities.setStyles(defaultStyles, this.props.style);
        const mapper = new ComponentsMapper();
        return (
            <View style={styles.container}>
                {question.text && <TextWithBadge question={question} style={textStyle} badgeStyle={badgeStyle}/>}
                <Row>
                    {question.childQuestions.map(childQuestion => {
                        const QuestionComponent = mapper.getComponent(childQuestion.type);
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
                <View style={styles.tableContainer}>
                    {this.state.answer && this.state.answer.map((answerRow, index) => (
                        <TouchableOpacity
                            key={answerRow.toString()}
                            onPress={() => this.deleteRow(index)}
                        >
                            <Row
                                style={[
                                    styles.rowStyle, index % 2 === 0 ? styles.evenRowStyle : {}
                                ]}
                            >
                                {question.childQuestions.map(childQuestion => {
                                    const value = getFieldValue(answerRow, childQuestion);
                                    return (
                                        <Col key={value}>
                                            <Text style={styles.childQuestionsText}>
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
