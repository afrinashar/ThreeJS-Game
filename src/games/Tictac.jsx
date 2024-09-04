import { useState } from "react";
import x from "../assets/x.png";
import o from "../assets/o.png";
import "./Tic.css";
import { Link } from "react-router-dom";

const TicTac = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = <img src={x} alt="X" className="fit-image" />;
    } else {
      nextSquares[i] = <img src={o} alt="O" className="fit-image" />;
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const start = () => {
    window.location.reload();
  };

  return (
    <>
      <h1 className="tic">Tic Tac Toe</h1>
      <Link to="/" className="btn status tic">Back</Link>
      <div className="status tic"><h3>{status}</h3></div>
      <div className="board">
        {Array.from({ length: 9 }, (_, index) => (
          <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      <button className="ticBtn" onClick={start}>Start</button>
    </>
  );
};

function Square({ value, onSquareClick }) {
  return (
    <button className="square tic" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTac;
