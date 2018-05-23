import moment from 'moment';
import {isEmpty} from 'lodash';

const handleChangeDate = (name, answer, format, onChange) => {
    if (isEmpty(answer)) {
        return onChange({[name]: undefined});
    }
    const date = moment(answer, format).toDate();
    if (!date.getTime()) {
        return onChange({[name]: undefined});
    }
    return onChange({[name]: date});
};

export default handleChangeDate;
