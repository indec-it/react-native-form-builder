import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const Checkbox = ({answer, onChange, question, style}) => (
    <View style={Utilities.setStyle(defaultStyles, style, 'container')}>
        <TextWithBadge question={question}/>
        <CheckBox
            title={question.text}
            style={Utilities.setStyle(defaultStyles, style, 'checkBox')}
            onPress={() => Utilities.handleChange(question.name, !answer, onChange)}
            checked={answer}
        />
    </View>
);

Checkbox.propTypes = {
    question: PropTypes.shape({}).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.array,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.bool
};

Checkbox.defaultProps = {
    answer: null,
    style: null
};

export default Checkbox;
