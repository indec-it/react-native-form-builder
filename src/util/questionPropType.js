import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    infoAlertText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number,
        label: PropTypes.string,
        exclusive: PropTypes.bool
    }))
});
