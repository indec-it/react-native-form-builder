import {toNumber} from 'lodash';

import {isEmptyNumberAnswer} from '.';

const handleEndEditingNumber = ({
    name, allowZero, max, min
}, answer, onChange) => {
    const parsedAnswer = toNumber(answer);
    let finalAnswer;

    if (isEmptyNumberAnswer(allowZero, answer, parsedAnswer)) {
        finalAnswer = undefined;
    } else if (parsedAnswer < min) {
        finalAnswer = min;
    } else if (parsedAnswer > max) {
        finalAnswer = max;
    } else {
        finalAnswer = parsedAnswer;
    }
    onChange({[name]: finalAnswer});
};

export default handleEndEditingNumber;
