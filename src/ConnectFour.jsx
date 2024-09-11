import React, { useState } from 'react';
import red from "../src/assets/red.png"
import yellow from "../src/assets/yellow.png"
import { color } from 'three/examples/jsm/nodes/Nodes.js';
const ConnectFour = () => {
  const [board, setBoard] = useState([...Array(6)].map(() => Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('red');
  const [winner, setWinner] = useState(null);

  // Function to check if the current player wins
  const checkWinner = (board, row, col, player) => {
    // Directions for horizontal, vertical, diagonal checks
    const directions = [
      { dr: 0, dc: 1 },   // Horizontal
      { dr: 1, dc: 0 },   // Vertical
      { dr: 1, dc: 1 },   // Diagonal (top-left to bottom-right)
      { dr: 1, dc: -1 },  // Diagonal (bottom-left to top-right)
    ];

    const isValid = (r, c) => r >= 0 && r < 6 && c >= 0 && c < 7;

    for (const { dr, dc } of directions) {
      let count = 1;

      // Check forward direction
      for (let i = 1; i < 4; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        if (isValid(r, c) && board[r][c] === player) {
          count++;
        } else {
          break;
        }
      }

      // Check backward direction
      for (let i = 1; i < 4; i++) {
        const r = row - dr * i;
        const c = col - dc * i;
        if (isValid(r, c) && board[r][c] === player) {
          count++;
        } else {
          break;
        }
      }

      if (count >= 4) {
        return true;
      }
    }

    return false;
  };

  const handleDrop = (colIndex) => {
    if (winner) return; // Stop the game if there's a winner

    // Drop piece in the first available row
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      if (!board[rowIndex][colIndex]) {
        const newBoard = [...board].map(row => [...row]);
        newBoard[rowIndex][colIndex] = currentPlayer;

        setBoard(newBoard);

        // Check if the current player won
        if (checkWinner(newBoard, rowIndex, colIndex, currentPlayer)) {
          setWinner(currentPlayer);
        } else {
          // Switch players
          setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
        }

        break;
      }
    }
  };

  const resetGame = () => {
    setBoard([...Array(6)].map(() => Array(7).fill(null)));
    setCurrentPlayer('red');
    setWinner(null);
  };

  return (
    <div style={styles.container}>
       {winner ? (
        <div style={styles.winner}>
          Player {winner} Wins!
          <button onClick={resetGame} style={styles.resetButton}>Play Again</button>
        </div>
      ) : (
        <p style={styles.turn}>Player {currentPlayer}'s Turn</p>
      )}

      <div style={styles.board}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                style={styles.cell}
                onClick={() => handleDrop(colIndex)}
              >
                {cell ? (cell === 'red' ?<img style={styles.img} src={red}/> : <img style={styles.img} src={yellow}/>) : '⚪'}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  img :{
    height:'50px'
  },
  container: {
    color:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor:"#B2D6FF"
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  board: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
  },
  cell: {
    width: '50px',
    height: '50px',
    margin: '5px',
    fontSize: '24px',
    display: 'flex', // Enable Flexbox
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    backgroundColor: '#459AFB',
    border: '1px solid white',
    cursor: 'pointer',
    outline: 'none',
  },
  turn: {
    marginBottom: '10px',
    fontSize: '1.5rem',
  },
  winner: {
    fontSize: '1.5rem',
    color: '#F8FFC3',
    marginBottom: '20px',
  },
  resetButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ConnectFour;
