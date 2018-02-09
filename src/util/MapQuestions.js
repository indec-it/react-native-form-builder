/* eslint-disable lodash/prefer-lodash-method */
/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';

import {types} from '../enums';
import CheckBox from '../components/CheckBox';
import DateInput from '../components/DateInput';
import DecimalInput from '../components/DecimalInput';
import DecimalInputOrIgnore from '../components/DecimalInputOrIgnore';
import TextBox from '../components/TextBox';
import TextInput from '../components/TextInput';
import TextInputOrNoAnswer from '../components/TextInputOrNoAnswer';
import TextInputOrIgnore from '../components/TextInputOrIgnore';
import TextWithBadge from '../components/TextWithBadge';
import Radio from '../components/Radio';
import RadioSections from '../components/RadioSections';
import RadioTable from '../components/RadioTable';
import Select from '../components/Select';
import Title from '../components/Title';
import YesNoButtons from '../components/YesNoButtons';
import Total from '../components/Total';
import AddOnList from '../components/AddOnList';
import LapelGroup from '../components/LapelGroup';
import Form from '../components/Form';
import FormGroup from '../components/FormGroup';

const getQuestionComponent = questionType => {
    switch (questionType) {
        case types.CHECKBOX:
            return CheckBox;
        case types.DATE_INPUT:
            return DateInput;
        case types.TEXT_BOX:
            return TextBox;
        case types.TEXT_WITH_BADGE:
            return TextWithBadge;
        case types.DECIMAL_INPUT:
            return DecimalInput;
        case types.DECIMAL_INPUT_OR_IGNORE:
            return DecimalInputOrIgnore;
        case types.RADIO:
            return Radio;
        case types.RADIO_SECTIONS:
            return RadioSections;
        case types.RADIO_TABLE:
            return RadioTable;
        case types.SELECT:
            return Select;
        case types.TEXT_INPUT:
            return TextInput;
        case types.TEXT_INPUT_OR_NO_ANSWER:
            return TextInputOrNoAnswer;
        case types.TEXT_INPUT_OR_IGNORE:
            return TextInputOrIgnore;
        case types.TITLE:
            return Title;
        case types.YES_NO_BUTTONS:
            return YesNoButtons;
        case types.TOTAL:
            return Total;
        case types.ADD_ON_LIST:
            return AddOnList;
        case types.LAPEL_GROUP:
            return LapelGroup;
        case types.FORM:
            return Form;
        case types.FORM_GROUP:
            return FormGroup;
        default:
            throw Error(`Question type not implemented: ${questionType}`);
    }
};

const isText = questionType =>
    questionType === types.TITLE
    || questionType === types.TEXT_BOX
    || questionType === types.TEXT_WITH_BADGE
    || questionType === types.TEXT_INPUT_OR_NO_ANSWER;

const isSectionQuestion = questionType =>
    questionType === types.RADIO_TABLE
    || questionType === types.TOTAL
    || questionType === types.FORM_GROUP;

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
