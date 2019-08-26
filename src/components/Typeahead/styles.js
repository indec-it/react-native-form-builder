import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    suggestionsWrapper: {
        marginTop: 5,
        marginBottom: 5
    },
    suggestion: {
        height: 40,
        padding: 5
    },
    suggestionText: {
        fontSize: 20,
        height: 40,
        padding: 0,
        width
    },
    inputRed: {
        fontSize: 15,
        height: 40,
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: '#F31212'
    },
    inputBlack: {
        fontSize: 15,
        height: 40,
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: '#000'
    },
    wrapper: {
        flex: 1
    },
    textStyle: {
        marginTop: -15
    }
});
