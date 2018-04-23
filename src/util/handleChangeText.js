import {isEmpty} from 'lodash';

const handleChangeText = (name, value, onChange) => onChange({[name]: !isEmpty(value) ? value : undefined});

export default handleChangeText;
