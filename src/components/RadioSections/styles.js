import {StyleSheet} from 'react-native';

export default {
    component: {
        style: StyleSheet.create({
            container: {
                flex: 1,
                paddingHorizontal: 4
            },
            sectionTitle: {
                fontWeight: 'bold',
                padding: 10
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
