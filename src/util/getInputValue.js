import {isNaN, isNil, toString} from 'lodash';

export default answer => (
    isNaN(answer) || isNil(answer) ? '' : toString(answer)
);
