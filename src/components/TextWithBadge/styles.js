import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        marginLeft: 5,
        fontSize: 18
    },
    textWithBadgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 0,
        marginBottom: 0
    },
    primaryBadgeContainer: {
        backgroundColor: '#3f53b5'
    },
    primaryBadgeText: {
        color: '#FFF',
        fontSize: 16
    },
    secondaryBadgeContainer: {
        backgroundColor: '#e6e6e6'
    },
    secondaryBadgeText: {
        color: '#666',
        fontSize: 16
    }
});
