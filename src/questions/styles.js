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
                backgroundColor: colors.primary
            },
            text: {
                color: '#FFF',
                fontSize: 16
            }
        },
        secondaryBadge: {
            container: {
                backgroundColor: colors.gray
            },
            text: {
                color: '#666',
                fontSize: 16
            }
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
    yesNoQuestion: {
        radioButton: {
            fontSize: 12
        },
        radioGroup: {
            width: 155,
            height: 32,
            backgroundColor: colors.gray,
            borderRadius: 24
        },
        text: {
            flex: 1
        }
    },
    input: {
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
        }
    },
    radio: {
        text: {
            fontWeight: 'bold',
            padding: 15,
            fontSize: 16
        }
    },
    radioTable: {
        rowText: {
            paddingTop: 15
        },
        colAlign: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
};
