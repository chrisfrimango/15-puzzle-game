import { useState } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Board from "./Board";
import StatusMessage from "./StatusMessage";
import { isPuzzleSolved, ShuffleArray, moveTile, useTimer } from "./Helpers";

function Puzzle() {
  const [numbers, setNumber] = useState(ShuffleArray());
  const [isPlaying, setIsPlaying] = useState(false);
  const { time, setTime } = useTimer(isPlaying);
  const [gameStatus, setGameStatus] = useState("let's play!");

  // Blandar om brickorna
  const shuffleAndSetNumbers = () => {
    setNumber(ShuffleArray());
    setTime(0);
    setIsPlaying(false);
    setGameStatus("Let's play!");
  };

  // Flyttar brickan
  const moveTileOnClick = (index) => {
    setIsPlaying(true);
    const newNumbers = moveTile(numbers, index);
    setNumber(newNumbers);

    // Skickar in en array med värdena från brickorna och kollar om det är löst
    if (isPuzzleSolved(newNumbers.map((tile) => tile.value))) {
      setGameStatus("Congratz you solved the puzzle!");
    } else {
      setGameStatus("Playing...");
    }
  };

  return (
    <Container className="position-relative">
      <StatusMessage status={gameStatus} time={time} />
      <div className="board-container">
        <Board numbers={numbers} onTileClick={moveTileOnClick} />
      </div>
      <Button shuffle={shuffleAndSetNumbers} />
    </Container>
  );
}

function Button({ shuffle }) {
  return (
    <button onClick={shuffle} className="btn btn-dark mt-4">
      Shuffle/Restart
    </button>
  );
}

Button.propTypes = {
  shuffle: PropTypes.func.isRequired,
};

export default Puzzle;
import "bootstrap/dist/css/bootstrap.min.css";
