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
            backgroundColor: '#3f53b5'
        },
        primaryText: {
            color: '#FFF',
            fontSize: 16
        },
        secondaryContainer: {
            backgroundColor: '#e6e6e6'
        },
        secondaryText: {
            color: '#666',
            fontSize: 16
        }
    }),
    textBox: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#3f53b5',
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 16,
            marginBottom: 16,
            alignItems: 'center',
            backgroundColor: '#ff4281'
        },
        text: {
            color: '#FFF'
        }
    })
};
