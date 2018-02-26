import {StyleSheet} from 'react-native';

export default {
    text: StyleSheet.create({
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
        }
    }),
    badge: StyleSheet.create({
        primaryContainer: {
            backgroundColor: '#333'
        },
        primaryText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
        },
        secondaryContainer: {
            backgroundColor: '#e6e6e6'
        },
        secondaryText: {
            color: '#555',
            fontSize: 16,
            fontWeight: 'bold'
        }
    }),
    textBox: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#8b8b8b',
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 16,
            marginBottom: 16,
            alignItems: 'center',
            backgroundColor: '#e3e3e3'
        },
        text: {
            color: '#333'
        }
    })
};
