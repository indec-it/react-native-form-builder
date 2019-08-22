import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {includes, size, isEmpty, filter, get, toLower, find} from 'lodash';
import {View} from 'react-native';
import {Alert} from '@indec/react-native-commons';
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
            suggestions: []
        };
    }

    getSuggestions(answer) {
        const value = get(answer, this.props.question.name);
        const {name} = this.props.question;
        this.props.onChange({[name]: value});

        if (size(value) > 2) {
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

    handleOnBlur() {
        const answer = !!find(this.props.question.options, option => option.value === this.props.answer);
        if (!answer) {
            const {name} = this.props.question;
            this.props.onChange({[name]: null});
        }
    }

    render() {
        const {question, textWithBadgeStyle, disabled} = this.props;
        const {suggestions} = this.state;
        return (
            <View style={styles.wrapper}>
                <TextInput
                    onChange={text => this.getSuggestions(text)}
                    {...{question, textWithBadgeStyle, disabled}}
                    answer={this.getAnswer()}
                    onBlur={() => this.handleOnBlur()}
                />
                {!isEmpty(suggestions) ? <Suggestions
                    suggestions={suggestions}
                    onChangeSuggestion={suggestion => this.handleSuggestion(suggestion)}
                /> : <Alert>No hay opciones</Alert>}
            </View>
        );
    }
}
