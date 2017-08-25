import React, {PropTypes} from 'react';
import InfoTextBox from './InfoTextBox';

const InfoTextBoxQuestion = ({question}) => (
    <InfoTextBox text={question.text}/>
);

InfoTextBoxQuestion.propTypes = {
    question: PropTypes.shape({}).isRequired
};

export default InfoTextBoxQuestion;
