import PropTypes from 'prop-types';

import rowPropTypes from './rowPropType';

export default PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    root: PropTypes.bool,
    rows: rowPropTypes.isRequired
});
