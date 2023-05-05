import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => <p>{message}</p>;

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
