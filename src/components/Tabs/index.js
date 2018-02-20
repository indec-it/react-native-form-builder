import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import styles from './styles';

const Tabs = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View>
            <ScrollView horizontal>
                <View style={computedStyles.container}>
                    {question.tabQuestions.map(tab => (
                        <Text
                            key={tab.id}
                            style={[
                                computedStyles.tab,
                                answer === tab.id ? computedStyles.selected : {}
                            ]}
                            onPress={() => onChange({[question.name]: tab.id})}
                        >
                            {tab.name}
                        </Text>
                    ))}
                </View>
            </ScrollView>
            <View style={computedStyles.footer}/>
        </View>
    );
};

Tabs.propTypes = {
    answer: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    question: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tabQuestions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType
};

Tabs.defaultProps = {
    style: null
};

export default Tabs;
