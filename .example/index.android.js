/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import {Card} from 'react-native-elements';
import exampleQuestions from './staticData';
import {MapQuestions} from 'react-native-form-builder';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default class rfb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            object: {}
        };
    }

    setField(event, section, question) {
        const object = this.state.object;
        if (!question.subSection) {
            if (section.name && section.name !== 'root') {
                object[section.name][event.target.name] = event.target.value;
            } else {
                object[event.target.name] = event.target.value;
            }
        } else {
            if (!object[section.name][section.subSection]) {
                object[section.name][section.subSection] = {};
            }
            object[section.name][section.subSection][event.target.name] = event.target.value;
        }
        this.setState({object});
    }

    render() {
        const object = this.state.object;
        return (
            <ScrollView style={styles.container}>
                {exampleQuestions.map(section => {
                    const chapter = section.name === 'root' ? object : object[section.name];
                    return (
                        <View key={section.id}>
                            {section.rows.map(row =>
                                (
                                    <Card key={row.id}>
                                        {row.questions.map(question =>
                                            (
                                                <MapQuestions
                                                    key={question.name}
                                                    chapter={chapter}
                                                    onChange={e => this.setField(e, section, question)}
                                                    question={question}
                                                />
                                            )
                                        )}
                                    </Card>
                                )
                            )}
                        </View>
                    )
                })}
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('rfb', () => rfb);
