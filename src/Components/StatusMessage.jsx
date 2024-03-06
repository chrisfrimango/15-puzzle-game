import PropTypes from "prop-types";

const StatusMessage = ({ status, time }) => {
  return (
    <>
      <h2 className="mb-4 text-uppercase text-dark mv-100">{status}</h2>
      <p className="text-dark">Time played: {time} seconds</p>
    </>
  );
};

StatusMessage.propTypes = {
  status: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default StatusMessage;
