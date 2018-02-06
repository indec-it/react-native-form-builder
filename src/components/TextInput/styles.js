import {StyleSheet} from 'react-native';

export default {
    component: {
        style: StyleSheet.create({
            container: {
                padding: 8,
                flex: 1,
                flexDirection: 'column',
                paddingBottom: 0,
                paddingTop: 0
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
            textAfterInput: {}
        }),
        highlightColor: '#ff4281'
    },
    textWithBadge: {
        badge: StyleSheet.create({}),
        text: StyleSheet.create({}),
        textBox: StyleSheet.create({})
    }
};
