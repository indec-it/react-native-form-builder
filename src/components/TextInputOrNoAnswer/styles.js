import {StyleSheet} from 'react-native';

export default {
    component: {
        style: StyleSheet.create({
            container: {
                padding: 8,
                flex: 1,
                flexDirection: 'column'
            },
            field: {
                height: 40
            },
            wrapper: {
                paddingTop: 5,
                position: 'relative'
            },
            label: {
                height: 50,
                marginTop: -15
            },
            blockedText: {
                color: 'grey'
            }
        }),
        highlightColor: '#ff4281',
        buttonTitle: 'S/N',
        buttonColor: '#1194f6'
    },
    textWithBadge: {
        badge: StyleSheet.create({}),
        text: StyleSheet.create({}),
        textBox: StyleSheet.create({})
    }
};
