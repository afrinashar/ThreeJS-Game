import React, { useState } from 'react';
import './RockPaperScissors.css'; // Custom styles with Bootstrap and modern effects
import 'bootstrap/dist/css/bootstrap.min.css';
import './SnakeAndLadder.css'
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";
import rocks from "../assets/rocks.jpg";
import papers from "../assets/papers.jpg";
import scissors from "../assets/scissors.jpg";

const options = [rocks, papers, scissors];
const option = [rock, paper, scissor];
function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [round, setRound] = useState(1);
  const [scores, setScores] = useState({ win: 0, lose: 0, tie: 0 });

  const playRound = (choice) => {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    let result;
    if (choice === randomChoice) {
      result = 'tie';
    } else if (
      (choice === 'rock' && randomChoice === 'scissors') ||
      (choice === 'paper' && randomChoice === 'rock') ||
      (choice === 'scissors' && randomChoice === 'paper')
    ) {
      result = 'win';
    } else {
      result = 'lose';
    }

    setScores((prevScores) => ({
      ...prevScores,
      [result]: prevScores[result] + 1,
    }));

    setRound(round + 1);
  };

  return (
    <div className="game-container bg-gradient">
      <div className="scoreboard row mb-4">
        <div className="col-4">
          <div className="score-card bg-primary text-white rounded shadow">
            <h4>Win</h4>
            <p>{scores.win}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="score-card bg-warning text-dark rounded shadow">
            <h4>Tie</h4>
            <p>{scores.tie}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="score-card bg-danger text-white rounded shadow">
            <h4>Lose</h4>
            <p>{scores.lose}</p>
          </div>
        </div>
      </div>

      <div className="round-counter mb-3 text-light shadow">
        Round: <strong>{round}</strong>
      </div>

      <div className="choices mb-4">
        <img
          className="choice-image rounded shadow-lg"
          src={playerChoice}
          alt={playerChoice || ''}
        />
        <img
          className="choice-image rounded shadow-lg"
          src={computerChoice}
          alt={computerChoice || ''}
        />
      </div>

      <div className="options row justify-content-center">
        {options.map((option) => (
          <div className="col-4" key={option}>
            <button
              className="option-btn btn btn-lg btn-outline-light shadow"
              onClick={() => playRound(option)}
            >
              <img
                className="icon-image rounded-circle"
                src={option}
                alt={option}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RockPaperScissors;
