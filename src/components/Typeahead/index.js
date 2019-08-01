import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {includes, size, isEmpty, filter, get, toLower, find} from 'lodash';
import {View} from 'react-native';
import {stylePropType} from '@indec/react-native-commons/util';

import {TextInput} from '..';
import {types} from '../../enums';
import Suggestions from './Suggestions';
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
        this.state = {
            suggestions: []
        };
    }

    getSuggestions(answer) {
        const value = get(answer, this.props.question.name);
        const {name} = this.props.question;
        this.props.onChange({[name]: value});

        if (!isEmpty(answer) && size(get(answer, this.props.question.name)) > 2) {
            this.setState(() => ({
                suggestions: filter(
                    this.props.question.options, option => includes(
                        toLower(option.label), toLower(value)
                    )
                )
            }));
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

    render() {
        const {question, textWithBadgeStyle} = this.props;
        const {suggestions} = this.state;
        return (
            <View style={styles.wrapper}>
                <TextInput
                    onChange={text => this.getSuggestions(text)}
                    {...{question, textWithBadgeStyle}}
                    answer={this.getAnswer()}
                />
                {!isEmpty(suggestions) && <Suggestions
                    suggestions={suggestions}
                    onChangeSuggestion={suggestion => this.handleSuggestion(suggestion)}
                />}
            </View>
        );
    }
}
