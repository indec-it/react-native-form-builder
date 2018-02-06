import {StyleSheet} from 'react-native';

export default {
    component: {
        style: StyleSheet.create({
            container: {
                padding: 8,
                flex: 1,
                flexDirection: 'column'
            },
            radioButton: {
                fontSize: 12
            },
            radioGroup: {
                width: 155,
                height: 32,
                backgroundColor: '#e6e6e6',
                borderRadius: 24
            },
            text: {
                flex: 1
            },
            buttonColorPressed: {
                color: '#fff'
            },
            buttonColorDefault: {
                color: '#000000'
            }
        }),
        selectedBackgroundColor: '#ff4281'
    },
    textWithBadge: {
        badge: StyleSheet.create({}),
        text: StyleSheet.create({}),
        textBox: StyleSheet.create({})
    }
};

