import React, { useState } from "react";
import cursorImage from '../assets/hammer.png'
import "../App.css"; import { Link } from "react-router-dom";
const Hide = () => {
  const [score, setScore] = useState(0);
  const [computer, setComputer] = useState("zero");
 
  const handle = (e) => { const random = Math.floor(Math.random() * 9);setComputer(random)
    const mark = random == e.target.name ? setScore(score + 1) : "";
    console.log(e.target.name, "randomr", random, mark);
  };
  return (
    <>{cursorImage}
      <h1 className="bg-info p-5">catch the Perry</h1><Link to="/" className='btn btn-danger'>Back</Link>
    <h3>Rules:</h3> <p>click the box below, if you find the perry behind box the score will in crease</p> <div className="board2  custom-cursor border">
        {Array.from({ length: 9 }, (_, index) => (
          <button
            key={index}
            className={`cell2  border border-info ${computer === index + 1 ? "perry" : ""}`}
            name={index}
            onClick={handle}
          >
            
          </button>
        ))}
      </div>
    <div className="card bg-info text-light p-5 pl-5"><h1> Score: {score}</h1></div>   
    </>
  );
};

export default Hide;
