import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, TouchableOpacity, Alert} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import {find} from 'lodash';

import MapQuestions from './MapQuestions';
import {types} from '../constants/constants';

const getFieldValue = (answerRow, question) => {
    const value = answerRow[question.name];
    return question.type === types.SELECT ? find(question.options, {value}).label : value;
};

class AddOnList extends Component {
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

    addToList() {
        this.state.answer.push(this.state.componentAnswers);
        this.props.onChange({[this.props.question.name]: this.state.answer});
        const componentAnswers = {};
        this.setState({componentAnswers});
    }

    deleteRow(index) {
        Alert.alert(
            'Eliminar',
            '¿Desea eliminar esta declaracion?',
            [{
                text: 'Cancelar',
                onPress: () => {
                }
            }, {
                text: 'Eliminar',
                onPress: () => {
                    this.state.answer.splice(index, 1);
                    this.props.onChange({[this.props.question.name]: this.state.answer});
                }
            }],
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    {this.props.question.childQuestions.map(question => (
                        <MapQuestions
                            key={question.name.toString()}
                            chapter={this.state.componentAnswers}
                            question={question}
                            onChange={componentAnswers => this.setState(() => ({componentAnswers}))}
                        />
                    ))}
                </View>
                <Button
                    title="AGREGAR"
                    onPress={() => this.addToList()}
                />
                <View style={{marginTop: 16}}>
                    {this.state.answer && this.state.answer.map((answerRow, index) => (
                        <TouchableOpacity onPress={() => this.deleteRow(index)}>
                            <Row
                                containerStyle={[
                                    {
                                        paddingTop: 8,
                                        paddingBottom: 8
                                    }, index % 2 === 0 ? {backgroundColor: '#e4e4e4'} : {}
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

export default AddOnList;
