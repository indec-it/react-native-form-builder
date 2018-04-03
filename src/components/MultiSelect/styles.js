import {StyleSheet} from 'react-native';

export default {
    component: StyleSheet.create({
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
    checkedIcon: 'check-square-o',
    uncheckedIcon: 'square-o'
};
