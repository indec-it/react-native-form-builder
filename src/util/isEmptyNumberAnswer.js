import {isNaN, isNil} from 'lodash';

const isEmptyNumberAnswer = (allowZero, answer, parsedAnswer) => (
    isNil(answer) || answer === '' || isNaN(parsedAnswer) || (parsedAnswer === 0 && !allowZero)
);

export default isEmptyNumberAnswer;
