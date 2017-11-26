import React from 'react';
import PropTypes from 'prop-types';
import InfoTextBox from './InfoTextBox';

const InfoTextBoxQuestion = ({question}) => (
    <InfoTextBox text={question.text}/>
);

InfoTextBoxQuestion.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default InfoTextBoxQuestion;
