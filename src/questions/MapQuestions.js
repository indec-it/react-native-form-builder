/* eslint-disable lodash/prefer-lodash-method */
/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';

import {types} from '../constants/constants';
import CheckBox from './CheckBox';
import InputDate from './InputDate';
import InputNumber from './InputNumber';
import InputNumberWithIgnore from './InputNumberWithIgnore';
import InfoTextBoxQuestion from './InfoTextBoxQuestion';
import InputText from './InputText';
import InputTextNoAnswer from './InputTextNoAnswer';
import InputTextWithIgnore from './InputTextWithIgnore';
import Label from './Label';
import QuestionTextWithoutAnswer from './QuestionTextWithoutAnswer';
import Radio from './Radio';
import RadioSections from './RadioSections';
import RadioTable from './RadioTable';
import Select from './Select';
import Title from './Title';
import YesNoQuestion from './YesNoQuestion';
import Total from './Total';
import AddOnList from './AddOnList';

const getQuestionComponent = questionType => {
    switch (questionType) {
        case types.CHECKBOX:
            return CheckBox;
        case types.DATE:
            return InputDate;
        case types.INFO_TEXT_BOX:
            return InfoTextBoxQuestion;
        case types.LABEL:
            return Label;
        case types.NUMBER:
            return InputNumber;
        case types.NUMBER_WITH_IGNORE:
            return InputNumberWithIgnore;
        case types.QUESTION_WITHOUT_ANSWER:
            return QuestionTextWithoutAnswer;
        case types.RADIO:
            return Radio;
        case types.RADIO_SECTIONS:
            return RadioSections;
        case types.RADIO_TABLE:
            return RadioTable;
        case types.SELECT:
            return Select;
        case types.TEXT:
            return InputText;
        case types.TEXT_OR_NO_ANSWER:
            return InputTextNoAnswer;
        case types.TEXT_WITH_IGNORE:
            return InputTextWithIgnore;
        case types.TITLE:
            return Title;
        case types.YES_NO:
            return YesNoQuestion;
        case types.SUM:
            return Total;
        case types.AddOnList:
            return AddOnList;

        default:
            throw Error(`Question type not implemented: ${questionType}`);
    }
};

const isText = questionType =>
    questionType === types.TITLE
    || questionType === types.INFO_TEXT_BOX
    || questionType === types.LABEL
    || questionType === types.QUESTION_WITHOUT_ANSWER;

const isSectionQuestion = questionType =>
    questionType === types.RADIO_TABLE
    || questionType === types.SUM;

/**
 * Set new answer inside a chapter copy.
 * @param {Object} chapter
 * @param {Object} question
 * @param {Object} answer
 * @returns {Object} A chapter clone with the new answer.
 */
const handleChange = (chapter, question, answer) => {
    const newChapter = Object.assign({}, chapter);

    let section = question.subSection ? Object.assign({}, chapter[question.subSection]) : newChapter;
    if (!section) {
        section = {};
    }

    Object.assign(section, answer);
    if (question.subSection) {
        // I need to assign the new subSection into the new chapter.
        newChapter[question.subSection] = section;
    }
    return newChapter;
};

const MapQuestions = ({chapter, question, onChange}) => {
    let section = chapter;
    if (question.subSection) {
        section = chapter[question.subSection];
    }
    if (!section) {
        section = {};
    }

    const QuestionComponent = getQuestionComponent(question.type);
    if (isText(question.type)) {
        return (<QuestionComponent question={question}/>);
    }
    if (isSectionQuestion(question.type)) {
        return (<QuestionComponent
            section={section}
            onChange={answer => onChange(handleChange(chapter, question, answer))}
            question={question}
        />);
    }
    return (<QuestionComponent
        answer={section[question.name]}
        onChange={answer => onChange(handleChange(chapter, question, answer))}
        question={question}
    />);
};

MapQuestions.propTypes = {
    chapter: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

export default MapQuestions;
