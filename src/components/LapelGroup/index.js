import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import styles from './styles';

const LapelGroup = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View>
            <ScrollView horizontal>
                <View style={computedStyles.container}>
                    {question.lapels.map(lapel => (
                        <Text
                            key={lapel.id}
                            style={[
                                computedStyles.lapel,
                                answer === lapel.id ? computedStyles.lapelSelected : {}
                            ]}
                            onPress={() => onChange({[question.name]: lapel.id})}
                        >
                            {lapel.name}
                        </Text>
                    ))}
                </View>
            </ScrollView>
            <View style={computedStyles.lapelFooter}/>
        </View>
    );
};

LapelGroup.propTypes = {
    answer: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    question: PropTypes.func.isRequired,
    onChange: PropTypes.number.isRequired,
    style: stylePropType
};

LapelGroup.defaultProps = {
    style: null
};

export default LapelGroup;
