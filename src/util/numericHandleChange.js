import {toNumber, includes, replace, last, split, join} from 'lodash';

export default (question, value, change) => {
    
    const {name, maxLength, maxDecimalsLength, min, max} = question;
    
    if (value === '') {
        return change({
            [name]: null
        });
    }

    let parsedValue = value;

    // Don't trigger the change if ends with '.'
    parsedValue = replace(parsedValue, ',', '.'); // Interpret ',' as '.'
    if (last(parsedValue) === '.') {
        return;
    }

    // Check integer and decimal length
    const splittedValue = split(parsedValue, '.');
    let integerPart = splittedValue[0] || '';
    let decimalPart = splittedValue[1] || '';
    if (maxLength) {
        integerPart = integerPart.substr(0, maxLength);
    }
    if (maxDecimalsLength) {
        decimalPart = decimalPart.substr(0, maxDecimalsLength);
    }

    // Parse the string
    if (decimalPart) {
        parsedValue = toNumber(`${integerPart}.${decimalPart}`);
    } else {
        parsedValue = toNumber(integerPart);
    }

    // Check max and min
    if (max !== undefined) {
        parsedValue = parsedValue > max ? max : parsedValue;
    }
    if (min !== undefined) {
        parsedValue = parsedValue < min ? min : parsedValue;
    }

    // Trigger the change
    return change({
        [name]: parsedValue
    });
};

