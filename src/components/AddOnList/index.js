import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import {Row, Col} from '@indec/react-native-commons';
import {find, get, isNil, some} from 'lodash';

import ComponentsMapper from '../../ComponentsMapper';
import defaultStyles from './styles';
import {types} from '../../enums';

const getFieldValue = (answerRow, question) => {
    const value = answerRow[question.name];
    return question.type === types.SELECT ? find(question.options, {value}).label : value;
};

// TODO Refactor ComponentsMapper implementation

export default class AddOnList extends Component {
    static propTypes = {
        answer: PropTypes.shape({}).isRequired,
        question: PropTypes.shape({
            name: PropTypes.string,
            childQuestions: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            componentAnswers: {},
            answer: props.answer ? props.answer : []
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
        this.props.onChange({[this.props.question.name]: this.state.answer});

        const componentAnswers = {};
        this.setState({componentAnswers});
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
                    this.props.onChange({[this.props.question.name]: this.state.answer});
                }
            }]
        );
    }

    render() {
        return (
            <View style={defaultStyles.container}>
                <Row>
                    {this.props.question.childQuestions.map(question => (
                        <ComponentsMapper
                            key={question.name.toString()}
                            chapter={this.state.componentAnswers}
                            question={question}
                            onChange={componentAnswers => this.setState(() => ({componentAnswers}))}
                        />
                    ))}
                </Row>
                <Button
                    title="AGREGAR"
                    onPress={() => this.addToList()}
                />
                <View style={{marginTop: 16}}>
                    {this.state.answer && this.state.answer.map((answerRow, index) => (
                        <TouchableOpacity onPress={() => this.deleteRow(index)}>
                            <Row
                                rowStyle={[
                                    {paddingTop: 8, paddingBottom: 8},
                                    index % 2 === 0 ? {backgroundColor: '#e4e4e4'} : {}
                                ]}
                            >
                                {this.props.question.childQuestions.map(question => (
                                    <Col>
                                        <Text style={{fontSize: 16}}>
                                            {answerRow[question.name] ? getFieldValue(answerRow, question) : '-'}
                                        </Text>
                                    </Col>
                                ))}
                            </Row>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}
