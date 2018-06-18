import {StyleSheet} from 'react-native';

export default {
    disabled: StyleSheet.create({
        container: {
            padding: 8,
            opacity: 0.3,
            flex: 1
        }
    }),
    numberInput: {
        component: StyleSheet.create({
            container: {
                padding: 8,
                flex: 1,
                flexDirection: 'column',
                paddingBottom: 0,
                paddingTop: 0
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
                marginTop: -25,
                marginLeft: 15
            },
            textAfterInput: {}
        }),
        highlightColor: '#ff0000'
    }
};
