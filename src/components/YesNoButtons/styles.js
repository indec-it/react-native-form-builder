import {StyleSheet} from 'react-native';

export default {
    component: StyleSheet.create({
        container: {
            padding: 8,
            flex: 1,
            flexDirection: 'column'
        },
        text: {
            flex: 1
        },
        radioButton: {
            fontSize: 14
        },
        radioGroup: {
            width: 220,
            height: 50,
            backgroundColor: '#eaeaea',
            borderWidth: 1,
            borderColor: '#8b8b8b',
            borderRadius: 4
        },
        buttonColorPressed: {
            color: '#004E84',
            fontWeight: 'bold'
        },
        buttonColorDefault: {
            color: '#000000'
        }
    }),
    selectedBackgroundColor: '#333'
};

