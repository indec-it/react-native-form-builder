import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import Utilities from '../util';
import TextWithBadge from '../TextWithBadge';
import defaultStyles from './styles';

const Checkbox = ({answer, onChange, question, style, badgeStyle, textStyle, textBoxStyle}) => {
    const styles = Utilities.setStyles(defaultStyles, style);
    return (
        <View style={styles.container}>
            {question.text && <TextWithBadge
                question={question}
                style={textStyle}
                badgeStyle={badgeStyle}
                textBoxStyle={textBoxStyle}
            />}
            <CheckBox
                title={question.checkBoxTitle}
                style={styles.checkBox}
                onPress={() => Utilities.handleChange(question.name, !answer, onChange)}
                checked={answer}
            />
        </View>
    );
};

Checkbox.propTypes = {
    question: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    style: Utilities.getStyleProps(),
    badgeStyle: Utilities.getStyleProps(),
    textStyle: Utilities.getStyleProps(),
    textBoxStyle: Utilities.getStyleProps(),
    answer: PropTypes.bool
};

Checkbox.defaultProps = {
    style: null,
    badgeStyle: null,
    textStyle: null,
    textBoxStyle: null,
    answer: null
};

export default Checkbox;
