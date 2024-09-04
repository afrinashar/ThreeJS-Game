import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ladder from "../assets/lader.png";
import snake1 from "../assets/snake1.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import zero from "../assets/0.png";

const Dicewar = () => {
  const [imageOne, setImageOne] = useState(zero);
  const [positionTwo, setPositionTwo] = useState(1);
  const [message, setMessage] = useState("Player RED rolls first");
  const [positionOne, setPositionOne] = useState(1);
  const [imageTwo, setImageTwo] = useState(zero);

  const handleRollDices = () => {
    const diceValueTwo = Math.floor(Math.random() * 6) + 1;
    const newPositionTwo = positionTwo + diceValueTwo;
    const displayImageTwo =
      diceValueTwo === 1
        ? one
        : diceValueTwo === 2
        ? two
        : diceValueTwo === 3
        ? three
        : diceValueTwo === 4
        ? four
        : diceValueTwo === 5
        ? five
        : diceValueTwo === 6
        ? six
        : zero;

    setImageTwo(displayImageTwo);
    setMessage("Blue's Turn");

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

    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionTwo] || newPositionTwo;

    setPositionOne(2);
    setPositionTwo(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  };

  const handleRollDice = () => {
    const diceValueOne = Math.floor(Math.random() * 6) + 1;
    const newPositionOne = positionOne + diceValueOne;
    const displayImageOne =
      diceValueOne === 1
        ? one
        : diceValueOne === 2
        ? two
        : diceValueOne === 3
        ? three
        : diceValueOne === 4
        ? four
        : diceValueOne === 5
        ? five
        : diceValueOne === 6
        ? six
        : zero;

    const result =
      imageOne > imageTwo
        ? "Blue Wins!"
        : imageOne < imageTwo
        ? "Red Wins!"
        : "It's a Tie!";

    setImageOne(displayImageOne);
    setMessage(result);

    setPositionTwo(2);

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

    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionOne] || newPositionOne;

    setPositionOne(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  };

  const start = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center bg-light text-dark rounded p-3 mb-4">Dice War</h1>
        <Link to="/" className="btn btn-danger mb-4">
          Back
        </Link>
        <h3>Rules:</h3>
        <p>Player with the highest Dice value wins</p>
        <div className="row mb-5">
          <div className="col card mx-2 p-3">
            <img
              src={imageTwo}
              alt="dice"
              height={280}
              width={285}
              className="bg-danger border-5 rounded-5 mb-3"
            />
            <button
              disabled={positionOne === 2}
              className="btn btn-danger text-light fw-bold w-100"
              onClick={handleRollDices}
            >
              Roll Dice
            </button>
          </div>
          <div className="col card mx-2 p-3">
            <img
              src={imageOne}
              alt="dice"
              height={280}
              width={285}
              className="bg-primary border-5 rounded-5 mb-3"
            />
            <button
              disabled={positionTwo === 2}
              className="btn btn-primary text-light fw-bold w-100"
              onClick={handleRollDice}
            >
              Roll Dice
            </button>
          </div>
        </div>
        <div className="card text-center p-4">
          <h1>{message}</h1>
          <button className="btn btn-light mt-3" onClick={start}>
            Re-Match
          </button>
        </div>
      </div>
    </>
  );
};

export default Dicewar;
