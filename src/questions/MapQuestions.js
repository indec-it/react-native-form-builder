/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
// import {
//     Card,
//     CardItem,
//     View
// } from 'native-base';
import YesNoQuestion from './YesNoQuestion';
import {types} from '../constants/constants';

const change = (event, callback) => callback(event);

const MapQuestions = ({chapter, question, onChange}) => {
    let section = chapter;
    if (question.subSection) {
        section = chapter[question.subSection];
    }
    if (!section) {
        section = {};
    }
    return (null);
        {/*<Card key={question.id}>*/}
            {/*<CardItem>*/}
                {/*{!question.parentQuestion && <View>*/}
                    {/*{question.type === types.YES_NO && <YesNoQuestion*/}
                        {/*answer={section[question.name]}*/}
                        {/*disabled={disabled}*/}
                        {/*question={question}*/}
                        {/*onChange={e => change(e, onChange)}*/}
                    {/*/>}*/}
                {/*</View>}*/}
                {/*{question.parentQuestion && <View>*/}
                    {/*{question.type === types.YES_NO && <YesNoQuestion*/}
                        {/*answer={section[question.name]}*/}
                        {/*question={question}*/}
                        {/*onChange={e => change(e, onChange)}*/}
                    {/*/>}*/}
                {/*</View>}*/}
            {/*</CardItem>*/}
        {/*</Card>*/}
};

MapQuestions.propTypes = {
    chapter: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

export default MapQuestions;
