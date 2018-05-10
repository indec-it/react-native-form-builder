import {isNaN, isNil} from 'lodash';

const isEmptyAnswer = (allowZero, answer, parsedAnswer) => (
    isNil(answer) || isNaN(parsedAnswer) || (parsedAnswer === 0 && !allowZero) || answer === ''
);

export default isEmptyAnswer;
