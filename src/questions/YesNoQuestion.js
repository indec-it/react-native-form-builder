/* eslint jsx-a11y/label-has-for:"off" */
import React from 'react';
import PropTypes from 'prop-types';
// import {Badge, Content, Label, ListItem, Radio, Text, View} from 'native-base';

const YesNoQuestion = ({answer, question, onChange}) => {
    const change = value => onChange({target: {name: question.name, value}});
    return (null);
        {/*<Content>*/}
            {/*<View>*/}
                {/*<Badge>*/}
                    {/*<Text>{question.number ? `${question.number}` : ''}</Text>*/}
                {/*</Badge>*/}
                {/*<Label>{question.text}</Label>*/}
            {/*</View>*/}
            {/*<View>*/}
                {/*<ListItem*/}
                    {/*onClick={() => change(true)}*/}
                {/*>*/}
                    {/*<Text>1 </Text>*/}
                    {/*<Radio*/}
                        {/*selected={answer === true}*/}
                        {/*onPress={() => change(true)}*/}
                    {/*/>*/}
                    {/*<Text> Si </Text>*/}
                {/*</ListItem>*/}
                {/*<ListItem*/}
                    {/*onPress={() => change(false)}*/}
                {/*>*/}
                    {/*<Text>2 </Text>*/}
                    {/*<Radio*/}
                        {/*selected={answer === false}*/}
                        {/*onPress={() => change(false)}*/}
                    {/*/>*/}
                    {/*<Text> No </Text>*/}
                {/*</ListItem>*/}
            {/*</View>*/}
        {/*</Content>*/}
    {/*);*/}
};

YesNoQuestion.propTypes = {
    answer: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    question: PropTypes.shape({}).isRequired
};

YesNoQuestion.defaultProps = {
    answer: null
};

export default YesNoQuestion;
