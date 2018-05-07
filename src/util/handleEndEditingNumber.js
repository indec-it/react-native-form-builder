import {toNumber} from 'lodash';

const handleEndEditingNumber = ({name, allowZero}, answer, onChange) => {
    const parsedAnswer = toNumber(answer);
    onChange({
        [name]: parsedAnswer !== 0 || allowZero ? parsedAnswer : undefined
    });
};

export default handleEndEditingNumber;
