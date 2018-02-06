import {StyleSheet} from 'react-native';

export default {
    component: {
        style: StyleSheet.create({
            container: {
                padding: 8,
                flex: 1,
                flexDirection: 'column'
            },
            text: {
                fontWeight: 'bold',
                padding: 15,
                fontSize: 16
            }
        }),
        checkedIcon: 'dot-circle-o',
        uncheckedIcon: 'circle-o'
    },
    textWithBadge: {
        badge: StyleSheet.create({}),
        text: StyleSheet.create({}),
        textBox: StyleSheet.create({})
    }
};
