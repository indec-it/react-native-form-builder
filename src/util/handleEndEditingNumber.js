import {toNumber} from 'lodash';

const handleEndEditingNumber = ({name}, answer, onChange) => onChange({[name]: toNumber(answer)});

export default handleEndEditingNumber;
