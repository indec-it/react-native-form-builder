import {toNumber} from 'lodash';

import {isEmptyNumberAnswer} from '.';

const handleEndEditingNumber = ({name, allowZero}, answer, onChange) => {
    const parsedAnswer = toNumber(answer);
    onChange({
        [name]: isEmptyNumberAnswer(allowZero, answer, parsedAnswer) ? undefined : parsedAnswer
    });
};

export default handleEndEditingNumber;
