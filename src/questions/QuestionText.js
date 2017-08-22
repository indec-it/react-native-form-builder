import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Badge} from 'react-native-elements';

const styles = StyleSheet.create({
    questionHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 10
    },
    questionText: {
        marginLeft: 5
    },
    questionBadge: {
        backgroundColor: '#4fb3bf',
        color: '#FFF'
    }
});

const QuestionText = ({question}) => {
    return (
        <View style={styles.questionHeader}>
            {question.number &&
            <Badge
                textStyle={styles.questionBadge}
                containerStyle={styles.questionBadge}
                value={question.number}
            />
            }
            <Text style={styles.questionText}>{question.text}</Text>
        </View>
    );
};

QuestionText.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default QuestionText;
