import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 0,
        marginBottom: 0
    },
    text: {
        marginLeft: 5,
        fontSize: 18
    },
    primaryBadge: {
        container: {
            backgroundColor: '#3f53b5'
        },
        text: {
            color: '#FFF',
            fontSize: 16
        }
    },
    secondaryBadge: {
        container: {
            backgroundColor: '#e6e6e6'
        },
        text: {
            color: '#666',
            fontSize: 16
        }
    }
});
