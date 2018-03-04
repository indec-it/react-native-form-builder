import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {mergeStyles, stylePropType} from '@indec/react-native-commons/util';

import ComponentsRegistry from '../../ComponentsRegistry';
import styles from './styles';


const handleChange = (
    chapter = {}, question, answer, onChange
) => onChange({[question.name]: Object.assign(chapter, answer)});

const Form = ({chapter, question, onChange, style}) => {
    const registry = new ComponentsRegistry();
    const computedStyles = mergeStyles(styles, style);
    return (
        <Fragment>
            {question.form.map(row => (
                <View style={computedStyles.container}>
                    {row.questions.map(childQuestion => {
                        const QuestionComponent = registry.get(childQuestion.type);
                        return (
                            <QuestionComponent
                                key={childQuestion.name}
                                answer={chapter}
                                question={childQuestion}
                                onChange={answer => onChange(handleChange(chapter, childQuestion, answer, onChange))}
                            />
                        );
                    })
                    }
                </View>))}
        </Fragment>
    );
};

Form.displayName = 'form';

Form.propTypes = {
    chapter: PropTypes.shape([]).isRequired,
    question: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    style: stylePropType
};

Form.defaultProps = {
    style: null
};

export default Form;
