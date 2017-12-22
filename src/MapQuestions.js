/* eslint-disable lodash/prefer-lodash-method */
/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';

import {
    AddOnList,
    CheckBox,
    InfoTextBox,
    InputDate,
    InputNumber,
    InputNumberWithIgnore,
    InputText,
    InputTextNoAnswer,
    InputTextWithIgnore,
    Label,
    TextWithoutAnswer,
    Radio,
    RadioSections,
    RadioTable,
    Select,
    Title,
    Total,
    YesNo
} from './components';
import {types} from './enums';

const getQuestionComponent = questionType => {
    switch (questionType) {
        case types.ADDON_LIST:
            return AddOnList;
        case types.CHECKBOX:
            return CheckBox;
        case types.INFO_TEXT_BOX:
            return InfoTextBox;
        case types.DATE:
            return InputDate;
        case types.NUMBER:
            return InputNumber;
        case types.NUMBER_WITH_IGNORE:
            return InputNumberWithIgnore;
        case types.TEXT:
            return InputText;
        case types.TEXT_OR_NO_ANSWER:
            return InputTextNoAnswer;
        case types.TEXT_WITH_IGNORE:
            return InputTextWithIgnore;
        case types.LABEL:
            return Label;
        case types.QUESTION_WITHOUT_ANSWER:
            return TextWithoutAnswer;
        case types.RADIO:
            return Radio;
        case types.RADIO_SECTIONS:
            return RadioSections;
        case types.RADIO_TABLE:
            return RadioTable;
        case types.SELECT:
            return Select;
        case types.TITLE:
            return Title;
        case types.TOTAL:
            return Total;
        case types.YES_NO:
            return YesNo;
        default:
            throw new Error(`Question type not implemented: ${questionType}`);
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
