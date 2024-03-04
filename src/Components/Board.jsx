import Tiles from "./Tiles";

const Board = ({ numbers, onTileClick }) => {
  return numbers.map((tile, index) => (
    <div
      key={index}
      className="position-relative d-flex justify-content-center align-items-center rounded m-1"
    >
      <Tiles
        index={index}
        number={tile.value}
        isRight={tile.isRight}
        onClick={onTileClick}
      />
    </div>
  ));
};

export default Board;
