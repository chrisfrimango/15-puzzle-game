import PropTypes from "prop-types";

const Tiles = ({ index, number, onClick, isRight }) => {
  const tileStyle = `${number === null ? "disabled" : ""} ${
    isRight ? "inPosition" : "notInPosition"
  }`;
  return (
    <div
      className={`w-100 h-100 text-white d-flex align-items-center justify-content-center ${tileStyle}`}
      style={{ cursor: number === null ? "default" : "pointer" }}
      onClick={() => onClick(index)}
    >
      <h3>{number}</h3>
    </div>
  );
};

Tiles.propTypes = {
  index: PropTypes.number.isRequired,
  number: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  isRight: PropTypes.bool,
};

export default Tiles;
