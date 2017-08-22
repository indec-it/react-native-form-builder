import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#32727a',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: '#4fb3bf'
    },
    text: {
        color: '#FFF'
    }
});

const InfoTextBox = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

InfoTextBox.propTypes = {
    text: PropTypes.shape({}).isRequired
};

export default InfoTextBox;
