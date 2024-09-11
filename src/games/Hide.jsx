import { useState } from "react";
import "./Hide.css";

const Hide = () => {
  const [score, setScore] = useState(0);
  const [computer, setComputer] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [showCorrectImage, setShowCorrectImage] = useState(false);
  const [showIncorrectImage, setShowIncorrectImage] = useState(false);

  const handle = (e) => {
    const random = Math.floor(Math.random() * 9);
    setComputer(random);
    setClicked(parseInt(e.target.name));

    if (random === parseInt(e.target.name)) {
      setScore(score + 1);
      setShowCorrectImage(true);
      setShowIncorrectImage(false);
    } else {
      setShowCorrectImage(false);
      setShowIncorrectImage(true);
    }
  };

  return (
    <>
      <h3>Rules:</h3>
      <p>Click the box below. If you find Perry behind the box, your score will increase.</p>
      
      <div className="container">
        {showIncorrectImage && (
          <img
            className="image-left"
            src="https://c.tenor.com/5TGzwoBrjQ0AAAAC/phineas-and-ferb-perry-the-platypus.gif"
            alt="Incorrect Choice"
          />
        )}
        
        <div className="board2 custom-cursor border">
          {Array.from({ length: 9 }, (_, index) => (
            <button
              key={index}
              className={`cell2 border border-info ${computer === index ? "perry" : ""} ${clicked !== null && clicked === index ? (computer === index ? "correct" : "incorrect") : ""}`}
              name={index}
              onClick={handle}
            ></button>
          ))}
        </div>
        
        {showCorrectImage && (
          <img
            className="image-right"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cbdda0b7-8068-4548-a53f-2efcdcd9cef1/d4avgwk-a2433dbf-573a-4449-a4b5-deb0ac8387e1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9jYmRkYTBiNy04MDY4LTQ1NDgtYTUzZi0yZWZjZGNkOWNlZjEvZDRhdmd3ay1hMjQzM2RiZi01NzNhLTQ0NDktYTRiNS1kZWIwYWM4Mzg3ZTEuZ2lmIn1dXX0.UiDkZXSHL1IyAVz_rlpHQ7Sa0sOit5MySxAuyAMEoo4"
            alt="Correct Choice"
          />
        )}
      </div>

      <div className="card  text-dark p-5 pl-5">
        <h1>Score: {score}</h1>
      </div>
    </>
  );
};

export default Hide;
