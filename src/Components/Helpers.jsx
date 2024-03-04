import { useState, useEffect } from "react";

// Kollar om det är löst
export const isPuzzleSolved = (numbers) => {
  console.log("numbers", numbers);
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] !== i + 1) return false;
  }
  return numbers[numbers.length - 1] === null;
};

// Shuffle och startar om spelet
export const ShuffleArray = () => {
  const numbers = Array.from({ length: 15 }, (_, i) => i + 1).concat(null);

  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.map((val, i) => ({
    value: val,
    index: i,
    isRight: i + 1 === val,
  }));
};

// Flyttar brickan
export const moveTile = (numbers, index) => {
  const emptyIndex = numbers.findIndex((tile) => tile.value === null);
  let newNumbers = [...numbers];

  console.log("index", index);
  console.log("emptyIndex", emptyIndex);

  const row = Math.floor(index / 4);
  const emptyRow = Math.floor(emptyIndex / 4);
  const column = index % 4;
  const emptyColumn = emptyIndex % 4;

  // Om brickan är i samma rad som den tomma platsen
  if (row === emptyRow) {
    // Riktningen för flytten, höger eller vänster
    const dir = index < emptyIndex ? 1 : -1;

    // Flytta brickorna mot den tomma platsen
    for (let i = emptyIndex; i != index; i -= dir) {
      newNumbers[i] = newNumbers[i - dir];
    }
    newNumbers[index] = { value: null, index: index }; // Uppdatera den tidigare positionen(klickade) flyttade brickan till null
  }
  // Om brickan är i samma kolumn som den tomma platsen
  else if (column === emptyColumn) {
    // Riktningen för flytten, upp eller ner
    const dir = index < emptyIndex ? 4 : -4;

    // Flytta brickorna mot den tomma platsen
    for (let i = emptyIndex; i != index; i -= dir) {
      newNumbers[i] = newNumbers[i - dir];
    }

    newNumbers[index] = { value: null, index: index }; // Uppdatera den tidigare positionen(klickade) flyttade brickan till null
  }

  // Kollar om brickan är på rätt plats
  newNumbers = newNumbers.map((tile, newIndex) => ({
    ...tile,
    isRight: tile.value === null ? false : newIndex + 1 === tile.value,
  }));

  return newNumbers;
};

// Timer som räknar tiden
export const useTimer = (isPlaying) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);
  return { time, setTime };
};
