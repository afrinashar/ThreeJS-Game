import React,{useState} from 'react'
import "../App.css"
const Puzzel = () => {
  const PuzzlePiece = ({ imageSrc, position, handleDragStart, handleDragOver, handleDrop }) => {
    return (
      <img 
        src={imageSrc}
        draggable
        onDragStart={(e) => handleDragStart(e, position)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, position)}
        className="puzzle-piece" 
        alt="puzzle piece" 
      />
    );
  }
  
  const GameBoard = ({ puzzlePieces, handleDragStart, handleDragOver, handleDrop }) => {
    return (
      <div className="game-board">
        {puzzlePieces.map((piece, index) => (
          <PuzzlePiece 
            key={index}
            imageSrc={piece.imageSrc}
            position={piece.position}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        ))}
      </div>
    );
  }
  const [puzzlePieces, setPuzzlePieces] = useState([
    { imageSrc: 'piece1.jpg', position: 0 },
    { imageSrc: 'piece2.jpg', position: 1 },
    // Add more pieces as needed
  ]);

  // Functions for handling drag-and-drop events
  const handleDragStart = (e, position) => {
    e.dataTransfer.setData('position', position);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e, currentPosition) => {
    e.preventDefault();
    const newPosition = e.dataTransfer.getData('position');
    const updatedPuzzlePieces = puzzlePieces.map((piece, index) => {
      if (index === currentPosition) {
        return puzzlePieces[newPosition];
      }
      if (index === newPosition) {
        return puzzlePieces[currentPosition];
      }
      return piece;
    });
    setPuzzlePieces(updatedPuzzlePieces);
  }

  return (
    <div className="app">
      <h1>Image Puzzle Game</h1>
      <GameBoard 
        puzzlePieces={puzzlePieces} 
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
    </div>
  );
}

export default Puzzel
