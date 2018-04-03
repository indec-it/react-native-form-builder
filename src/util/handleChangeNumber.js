import {isNumber, isEmpty, toNumber} from 'lodash';

const handleChangeNumber = (name, value, onChange) => {
    if (isNumber(value)) {
        return onChange({[name]: value});
    }
    if (isEmpty(value)) {
        return onChange({[name]: undefined});
    }
    const parsedValue = toNumber(value);
    if (parsedValue === 0) {
        return onChange({[name]: undefined});
    }
    return onChange({[name]: parsedValue});
};

export default handleChangeNumber;
