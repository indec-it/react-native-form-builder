import {toNumber} from 'lodash';

export default (name, value, change) => {
    const parsedValue = toNumber(value);

    if (value === '' && parsedValue === 0) {
        return change({
            [name]: ''
        });
    }
    return change({
        [name]: parsedValue
    });
};

