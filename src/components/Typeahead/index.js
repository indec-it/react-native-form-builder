import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {includes, size, isEmpty, filter, get, toLower, find} from 'lodash';
import {View, Text} from 'react-native';
import {stylePropType} from '@indec/react-native-commons/util';

import {TextInput} from '..';
import {types} from '../../enums';
import Suggestions from './Suggestions';
import styles from './styles';

export default class Typeahead extends PureComponent {
    static displayName = types.TYPE_AHEAD;

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        question: PropTypes.shape({
            name: PropTypes.string,
            options: PropTypes.arrayOf(PropTypes.shape({
                value: PropTypes.number,
                label: PropTypes.string
            }))
        }).isRequired,
        answer: PropTypes.string.isRequired,
        textWithBadgeStyle: stylePropType,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        textWithBadgeStyle: null,
        disabled: false
    };


    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            showNoOptions: false
        };
    }

    getSuggestions(answer) {
        const value = get(answer, this.props.question.name);
        const {name} = this.props.question;
        this.props.onChange({[name]: value});

        if (size(value) > 2) {
            const suggestions = filter(
                this.props.question.options, option => includes(toLower(option.label), toLower(value))
            );
            this.setState(() => ({suggestions, showNoOptions: isEmpty(suggestions)}));
        }
    }

    getAnswer() {
        const {answer} = this.props;
        return get(find(this.props.question.options, option => option.value === answer), 'label') || answer;
    }

    handleSuggestion(suggestion) {
        const {name} = this.props.question;
        this.props.onChange({[name]: suggestion.value});
        this.setState(() => ({suggestions: []}));
    }

    handleOnBlur() {
        const answer = !!find(this.props.question.options, option => option.value === this.props.answer);
        if (!answer) {
            const {name} = this.props.question;
            this.props.onChange({[name]: null});
        }
        this.setState(() => ({showNoOptions: false}));
    }

    render() {
        const {question, textWithBadgeStyle, disabled} = this.props;
        const {suggestions, showNoOptions} = this.state;
        return (
            <View style={styles.wrapper}>
                <TextInput
                    onChange={text => this.getSuggestions(text)}
                    {...{question, textWithBadgeStyle, disabled}}
                    answer={this.getAnswer()}
                    onBlur={() => this.handleOnBlur()}
                />
                {!isEmpty(suggestions) && <Suggestions
                    suggestions={suggestions}
                    onChangeSuggestion={suggestion => this.handleSuggestion(suggestion)}
                />}
                {showNoOptions && <Text style={styles.textStyle}>No hay opciones</Text>}
            </View>
        );
    }
}
