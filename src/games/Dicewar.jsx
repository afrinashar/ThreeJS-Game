import React, { useState } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
// import ladder from "../assets/ladder.png";
// import snake1 from "../assets/snake1.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import zero from "../assets/0.png";

const Dicewar = () => {
  const [imageOne, setImageOne] = useState(zero);
  const [imageTwo, setImageTwo] = useState(zero);
  const [positionOne, setPositionOne] = useState(1);
  const [positionTwo, setPositionTwo] = useState(1);
  const [message, setMessage] = useState("Player RED rolls first");
  const [playerTurn, setPlayerTurn] = useState('RED');

  const diceImages = [one, two, three, four, five, six];

  const snakesAndLadders = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78,
  };

  const rollDice = (player) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const newPosition = player === 'RED'
      ? positionOne + diceValue
      : positionTwo + diceValue;
    const displayImage = diceImages[diceValue - 1];

    if (player === 'RED') {
      setImageOne(displayImage);
      setPositionOne(
        snakesAndLadders[newPosition] || newPosition > 100 ? positionOne : newPosition
      );
      setPlayerTurn('BLUE');
      setMessage("Player BLUE's Turn");
    } else {
      setImageTwo(displayImage);
      setPositionTwo(
        snakesAndLadders[newPosition] || newPosition > 100 ? positionTwo : newPosition
      );
      setPlayerTurn('RED');
      setMessage(
        positionOne === positionTwo
          ? "It's a Tie!"
          : positionOne > positionTwo
          ? "RED Wins!"
          : "BLUE Wins!"
      );
    }
  };

  const handleRoll = (player) => {
    rollDice(player);
  };

  const resetGame = () => {
    setPositionOne(1);
    setPositionTwo(1);
    setImageOne(zero);
    setImageTwo(zero);
    setMessage("Player RED rolls first");
    setPlayerTurn('RED');
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-4">Rules:</h3>
        <p className="mb-4">Player with the highest dice value wins. Snakes and Ladders affect player positions.</p>
        <div className="row mb-5">
          <div className="col card mx-2 p-3 text-center">
            <img
              src={imageTwo}
              alt="dice"
              height={280}
              width={285}
              className="bg-danger border-5 rounded-5 mb-3"
            />
            <button
              disabled={playerTurn !== 'BLUE'}
              className="btn btn-danger text-light fw-bold w-100"
              onClick={() => handleRoll('BLUE')}
            >
              Roll Dice
            </button>
          </div>
          <div className="col card mx-2 p-3 text-center">
            <img
              src={imageOne}
              alt="dice"
              height={280}
              width={285}
              className="bg-primary border-5 rounded-5 mb-3"
            />
            <button
              disabled={playerTurn !== 'RED'}
              className="btn btn-primary text-light fw-bold w-100"
              onClick={() => handleRoll('RED')}
            >
              Roll Dice
            </button>
          </div>
        </div>
        <div className="card text-center p-4">
          <h1>{message}</h1>
          <button className="btn btn-light mt-3" onClick={resetGame}>
            Re-Match
          </button>
        </div>
      </div>
    </>
  );
};

export default Dicewar;
