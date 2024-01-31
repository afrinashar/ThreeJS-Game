import React,{useState} from 'react'
import "../App.css"
const Puzzel = () => {
    const generateRandomArray = (size) => {
        let arr = [];
        for (let i = 1; i <= size * size; i++) {
          arr.push(i);
        }
        arr.sort(() => Math.random() - 0.5);
        return arr;
      };
      
      const PuzzlePiece = ({ number, onClick }) => {
        return <div className="piece" onClick={onClick}>{number}</div>;
      };
      
      const PuzzleBoard = ({ size }) => {
        const [pieces, setPieces] = useState(generateRandomArray(size));
        const [solved, setSolved] = useState(false);
      
        const handleClick = (index) => {
          const newPieces = [...pieces];
          if (index - 1 >= 0 && newPieces[index - 1] === size * size) {
            const temp = newPieces[index];
            newPieces[index] = newPieces[index - 1];
            newPieces[index - 1] = temp;
          } else if (index + 1 < size * size && newPieces[index + 1] === size * size) {
            const temp = newPieces[index];
            newPieces[index] = newPieces[index + 1];
            newPieces[index + 1] = temp;
          } else if (index - size >= 0 && newPieces[index - size] === size * size) {
            const temp = newPieces[index];
            newPieces[index] = newPieces[index - size];
            newPieces[index - size] = temp;
          } else if (index + size < size * size && newPieces[index + size] === size * size) {
            const temp = newPieces[index];
            newPieces[index] = newPieces[index + size];
            newPieces[index + size] = temp;
          }
          setPieces(newPieces);
          setSolved(newPieces.join('') === generateRandomArray(size).join(''));
        };
      
        return (
          <div className="boards">
            {pieces.map((number, index) => (
              <PuzzlePiece key={index} number={number === size * size ? '' : number} onClick={() => handleClick(index)} />
            ))}
            {solved && <div className="message">Congratulations! Puzzle solved!</div>}
          </div>
        );
      }; const size = 3; // Change this to change the size of the puzzle (e.g., 3 for a 3x3 puzzle)
      return (
        <div className="App">
          <h1>Puzzle Game</h1>
          <PuzzleBoard size={size} />
        </div>)
}

export default Puzzel
