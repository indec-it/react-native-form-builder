import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {stylePropType} from '@indec/react-native-commons/util';
import TextInput from '../TextInput';

class TextInputAutoCalculated extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        const {section, question, onChange} = nextProps;

        const calculatedValue = question.calculator(section);
        if (this.state.value !== calculatedValue) {
            this.setState({value: calculatedValue});
            onChange({[question.name]: calculatedValue});
        }
    }

    render() {
        const {question, onChange, style} = this.props;

        return (
            <TextInput
                answer={this.state.value}
                question={question}
                onChange={onChange}
                style={style}
                disabled
            />
        );
    }
}

TextInputAutoCalculated.displayName = 'textInputAutoCalculated';

TextInputAutoCalculated.propTypes = {
    section: PropTypes.shape({}),
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType
};

TextInputAutoCalculated.defaultProps = {
    style: null,
    section: {}
};

export default TextInputAutoCalculated;
