import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';
import {MapQuestions} from '../../util';

const handleChange = (answer = {}, question, change) => {
    const res = Object.assign(answer, change);
    return {[question.name]: res};
};

const Form = ({answer, question, onChange, style}) => {
    const computedStyles = mergeStyles(styles, style);
    return (
        <View>
            {question.form.map(row => (
                <View style={computedStyles.container}>
                    {row.questions.map(quest => (
                        <MapQuestions
                            key={quest.name.toString()}
                            chapter={answer}
                            question={quest}
                            onChange={change => onChange(handleChange(answer, question, change))}
                        />
                    ))}
                </View>))}
        </View>
    );
};

Form.propTypes = {
    answer: PropTypes.shape([]).isRequired,
    question: PropTypes.shape({
        form: PropTypes.shape([]).isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType
};

Form.defaultProps = {
    style: null
};

export default Form;
