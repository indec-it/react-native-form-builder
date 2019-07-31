import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {includes, size, isEmpty, find} from 'lodash';
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import {stylePropType} from '@indec/react-native-commons/util';
import {TextWithBadge} from '..';
import {types} from '../../enums';
import {handleChangeText} from '../../util';
import styles from './styles';

export default class Typeahead extends PureComponent {
    static displayName = types.TYPE_AHEAD;

    static propTypes = {
        question: PropTypes.shape({
            name: PropTypes.string,
            options: PropTypes.arrayOf(PropTypes.shape({
                value: PropTypes.number,
                label: PropTypes.string
            }))
        }).isRequired,
        answer: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        textWithBadgeStyle: stylePropType
    };

    static defaultProps = {
        textWithBadgeStyle: null
    };

    constructor(props) {
        super(props);
        if (props.answer) {
            this.selectedSuggestion = true;
            this.valueToShow = this.getSuggestionText(
                find(props.question.options, option => option.value === props.answer[props.question.name])
            );
        } else {
            this.selectedSuggestion = false;
        }
        this.suggestions = [];
    }

    componentDidMount() {
        this.createSelectedValue(this.valueToShow, this.props.answer);
    }

    onChangeText = value => {
        if (this.selectedSuggestion) {
            this.selectedSuggestion = false;
            this.clearValue();
        } else {
            this.valueToShow = value[this.props.question.name];
            this.suggestions = this.filterSuggestions(
                this.props.question.options, this.valueToShow
            );
            this.forceUpdate();
        }
    };

    getSuggestionText = suggestion => suggestion.label;

    getSuggestionValue = suggestion => suggestion.value;

    clearValue = () => this.createSelectedValue('', '');

    createSelectedValue = (suggestionText, suggestionValue) => {
        this.suggestions = {};
        const selectedValue = {};
        selectedValue[this.props.question.name] = suggestionValue;
        this.props.onChange(selectedValue);
        this.valueToShow = suggestionText;
    };

    isSimilar = (value, suggestionText) => includes(suggestionText.toLowerCase(), value.toLowerCase());

    shouldFilterSuggestions = (newSuggestions, value) => !isEmpty(newSuggestions) &&
        value && !this.selectedSuggestion;

    filterSuggestions = (newSuggestions, value) => {
        if (size(value) < 2 || !this.shouldFilterSuggestions(newSuggestions, value)) {
            return {};
        }
        return newSuggestions.reduce((suggestions, suggestion) => {
            const suggestionText = this.getSuggestionText(suggestion);
            const sgs = suggestions;
            if (!suggestionText || !this.isSimilar(value, suggestionText)) {
                return suggestions;
            }
            sgs[suggestionText] = suggestion;
            return sgs;
        }, {});
    };

    suggestionClick = suggestion => {
        this.selectedSuggestion = true;
        this.suggestions = {};
        const value = this.getSuggestionValue(
            find(this.props.question.options, ['label', suggestion])
        );
        this.createSelectedValue(suggestion, value);
    };

    renderSuggestions = () => {
        const suggestionTexts = Object.keys(this.suggestions || {});
        if (isEmpty(suggestionTexts)) {
            return null;
        }
        return (
            <View style={styles.suggestionsWrapper}>
                {suggestionTexts.map(suggestion => (
                    <TouchableOpacity
                        suggestionText={suggestion}
                        activeOpacity={0.6}
                        style={styles.suggestion}
                        onPress={() => this.suggestionClick(suggestion)}
                    >
                        <View style={styles.wrapper}>
                            <Text style={styles.suggestionText}>
                                {suggestion}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    render() {
        const {question, textWithBadgeStyle} = this.props;
        return (
            <View style={styles.wrapper}>
                {question.text && <TextWithBadge
                    question={question}
                    style={textWithBadgeStyle}
                />}
                <TextInput
                    value={this.valueToShow}
                    onChangeText={text => handleChangeText(question, text, this.onChangeText)}
                    style={!this.selectedSuggestion ? styles.inputRed : styles.inputBlack}
                />
                {this.renderSuggestions()}
            </View>
        );
    }
}
