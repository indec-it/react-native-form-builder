import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        marginTop: 8
    },
    lapel: {
        backgroundColor: '#e4e4e4',
        padding: 16,
        marginRight: 8,
        borderColor: '#cecece',
        borderWidth: 0.5,
        marginTop: 8
    },
    lapelSelected: {
        backgroundColor: '#0088ff',
        color: 'white',
        marginTop: 0
    },
    lapelFooter: {
        backgroundColor: '#cecece',
        height: 1
    }
});

const LapelGroup = ({answer, question, onChange}) => (
    <View>
        <ScrollView horizontal>
            <View style={styles.base}>
                {question.lapels.map(lapel => (
                    <Text
                        key={lapel.id}
                        style={[
                            styles.lapel,
                            answer === lapel.id ? styles.lapelSelected : {}
                        ]}
                        onPress={() => onChange({[question.name]: lapel.id})}
                    >
                        {lapel.name}
                    </Text>
                ))}
            </View>
        </ScrollView>
        <View style={styles.lapelFooter}/>
    </View>
);

LapelGroup.propTypes = {
    answer: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    question: PropTypes.func.isRequired,
    onChange: PropTypes.number.isRequired
};

export default LapelGroup;
