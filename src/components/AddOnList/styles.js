import {StyleSheet} from 'react-native';

export default {
    component: StyleSheet.create({
        container: {
            flex: 1
        },
        childrenQuestionsText: {
            fontSize: 16
        },
        tableContainer: {
            marginTop: 16
        },
        rowStyle: {
            paddingTop: 8,
            paddingBottom: 8
        },
        evenRowStyle: {
            backgroundColor: '#e4e4e4'
        }
    }),
    textWithBadge: {
        badge: StyleSheet.create({}),
        text: StyleSheet.create({}),
        textBox: StyleSheet.create({})
    }
};
