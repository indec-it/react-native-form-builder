import colors from './colors';

export default {
    rowContainer: {
        padding: 8,
        flex: 1,
        flexDirection: 'row'
    },
    columnContainer: {
        padding: 8,
        flex: 1,
        flexDirection: 'column'
    },
    infoTextBox: {
        container: {
            flex: 1,
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: colors.primary,
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 16,
            marginBottom: 16,
            alignItems: 'center',
            backgroundColor: colors.accent
        },
        text: {
            color: '#FFF'
        }
    },
    questionText: {
        questionHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        text: {
            marginLeft: 5,
            fontSize: 18
        },
        questionBadge: {
            backgroundColor: colors.primary,
            color: '#FFF',
            fontSize: 16
        },
        secondaryQuestionBadge: {
            backgroundColor: colors.gray,
            color: '#666',
            fontSize: 16
        }
    },
    radioSections: {
        rowContainer: {
            flex: 1,
            paddingHorizontal: 4
        },
        sectionSubTitle: {
            fontWeight: 'bold',
            padding: 10
        }
    },
    testText: {
        borderColor: '#F00',
        borderBottomWidth: 1
    },
    testInline: {
        backgrundColor: 'red'
    },
    yesNoQuestion: {
        radioButton: {
            fontSize: 12
        },
        radioGroup: {
            width: 155,
            height: 32,
            backgroundColor: colors.gray,
            borderRadius: 24
        }
    }
};
