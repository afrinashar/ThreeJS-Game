import "../App.css";import ladder from "../assets/lader.png";import snake3 from "../assets/snake3.png";
import snake1 from "../assets/snake1.png";import snake2 from "../assets/snake2.webp";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";import zero from "../assets/0.png";
import React, { useState, useEffect } from "react"; import { Link } from "react-router-dom";
import { CardImgOverlay } from "react-bootstrap";
const Div = () => {
  const [positionOne, setPositionOne] = useState(1);

  const [imageOne, setImageOne] = useState(zero);
  const [positionTwo, setPositionTwo] = useState(1);

  const [imageTwo, setImageTwo] = useState(zero);
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
        :diceValueOne == null? zero:"";
console.log(diceValueOne);
    setImageOne(displayImageOne);

    // Define snakes and ladders
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

    // Check if there's a snake or ladder at the new position
    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionOne] || newPositionOne;

    setPositionOne(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  };
  const handleRollDices = () => {
    const diceValueTwo = Math.floor(Math.random() * 6) + 1;
    const newPositionTwo= positionTwo + diceValueTwo;
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
        : diceValueTwo ===  6
        ? six
        : zero;

    setImageTwo(displayImageTwo);

    // Define snakes and ladders
    const snakesAndLadders = {
      18: 8,
     77: 26,
      69: 98,
      86: 65,
      63: 83,
      13: 42
    };

    // Check if there's a snake or ladder at the new position
    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionTwo] || newPositionTwo;

    setPositionTwo(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  };
  useEffect(() => {
    if (positionOne === 100) {
      alert("Congratulations! You won!");
    }
  }, [positionOne]);

  return (
    <>
      <div className="App">
        <h1 className="bg-success text-light fluid w-100">
          Snake and Ladder Game
        </h1><div className="card"><Link to="/" className='btn btn-danger'>Back</Link></div>
        <div className="board bg-success text-light border">
          {Array.from({ length: 100 }, (_, index) => (
            <div
              key={index}
              className={`cell ${positionOne ===  100- index ? "player" : positionTwo === 100-index?"players":""}`}
            >
              {100 - index }
            </div>
          ))}
        </div>{" "}
   <CardImgOverlay> <img  className="lad" src={ladder}></img>  <img  className="s1"src={snake1}></img>    <img  className="s4"src={snake2}></img>  <img  className="s3"src={snake1}></img>  <img  className="s2"src={snake2}></img> <img  className="lad2" src={ladder}></img><img  className="lad3" src={ladder}></img></CardImgOverlay>
 
       
     <div className="card d-flex flex-col"> 
       <div className="col"> <img
          src={imageOne}
          alt="img"
          height={80}
          width={85}
          className="bg-primary border border-5 m-5 rounded-5 text-info"
        ></img>  <button
          disabled={positionTwo == 2}
          className="btn btn-primary text-light fw-bold m-4 border border-light"
          onClick={handleRollDice}
        >
          Roll Dice
        </button></div> <div className="col"><img
          src={imageTwo}
          alt="img"
          height={80}
          width={85}
          className="bg-danger border-5 m-5 rounded-5 text-danger"
        ></img>{" "}
        <button
          disabled={positionOne == 2}
          className="btn btn-danger text-light fw-bold m-4 border border-light"
          onClick={handleRollDices}
        >
          Roll Dice
        </button></div> 
         </div>
       </div> 
    </>
  );
};

export default Div;
