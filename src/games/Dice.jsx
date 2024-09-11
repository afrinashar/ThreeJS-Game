import React, { useState } from "react";
import "./Dice.css";
import zero from "../assets/0.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import { Link } from "react-router-dom";

const Dice = () => {
  const [comment, setComment] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [rollCount, setRollCount] = useState(0); // Track number of rolls
  const [image, setImage] = useState(zero);
  const [animating, setAnimating] = useState(false); // Dice rolling animation state

  const rollDice = () => Math.floor(Math.random() * 6);

  const handleClick = (e) => {
    setAnimating(true);
    setTimeout(() => {
      const output = rollDice();
      const pics = [zero, one, two, three, four, five, six][output];
      setImage(pics);
      setInput(e.target.name);
      setRollCount(rollCount + 1);

      if (e.target.name == output) {
        setComment("Well done, roll again!");
        setScore(score + 1);
      } else {
        setComment("Try again!");
      }
      setAnimating(false);
    }, 1000); // 1-second delay for animation
  };

  const resetGame = () => {
    setScore(0);
    setRollCount(0);
    setComment("");
    setImage(zero);
  };

  return (
    <>
       

      <div className="centers d-flex flex-column align-items-center justify-content-center">
        <div className="top mt-4 mb-4">
         <h2><strong>Score:</strong> {score}</h2>
        <h3 className="p-3 text-primary">{comment}</h3>
        <h4><strong>Rolls:</strong> {rollCount}</h4>   
          <button onClick={resetGame} className="btn btn-danger mb-4">Reset Game</button>
        </div>

        <div className="dice-buttons d-flex flex-wrap justify-content-center mb-4">
          {[...Array(6).keys()].map(num => (
            <button
              key={num}
              onClick={handleClick}
              name={num}
              className="btn btn-primary m-2 dice-button"
              disabled={animating} // Disable buttons while animating
            >
              {num + 1}
            </button>
          ))}
        </div>

        <div className={`dice-image mb-4 ${animating ? 'rolling' : ''}`}>
          <img className="border border-dark" src={image} height={200} width={205} alt="dice" />
        </div>
       
      </div>
    </>
  );
};

export default Dice;
