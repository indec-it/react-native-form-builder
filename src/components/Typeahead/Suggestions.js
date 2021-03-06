import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const Suggestions = ({suggestions, onChange}) => (
    <View style={styles.suggestionsWrapper}>
        {suggestions.map(suggestion => (
            <TouchableOpacity
                suggestionText={suggestion}
                activeOpacity={0.6}
                style={styles.suggestion}
                onPress={() => onChange(suggestion)}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.suggestionText}>
                        {suggestion.label}
                    </Text>
                </View>
            </TouchableOpacity>
        ))}
    </View>
);

Suggestions.propTypes = {
    onChange: PropTypes.func.isRequired,
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    ).isRequired
};

export default Suggestions;
