import moment from 'moment';

const handleChangeDate = (name, date, format, onChange) => onChange({
    [name]: moment(date, format).toDate()
});

export default handleChangeDate;
