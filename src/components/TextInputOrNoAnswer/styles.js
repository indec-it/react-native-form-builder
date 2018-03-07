import {StyleSheet} from 'react-native';

export default {
    component: StyleSheet.create({
        container: {
            padding: 8,
            flex: 1,
            flexDirection: 'column'
        },
        field: {
            height: 40,
            padding: 0
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
    highlightColor: '#ff0000',
    buttonTitle: 'S/N',
    buttonColor: '#1194f6'
};
