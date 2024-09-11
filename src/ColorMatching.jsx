import React, { useState } from 'react';

// Function to generate a random hex color
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorMatching = () => {
  const [targetColor, setTargetColor] = useState(generateRandomColor());
  const [selectedColor, setSelectedColor] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(5); // Player has 5 attempts
  const [feedback, setFeedback] = useState('');

  const checkMatch = () => {
    if (selectedColor === targetColor) {
      setFeedback('Matched!');
      setScore(score + 1);
      setTargetColor(generateRandomColor()); // Generate a new target color
      setSelectedColor(''); // Reset selected color
    } else {
      setFeedback('Not Matched!');
    }
    setAttempts(attempts - 1); // Decrease attempts

    // Reset feedback after a short delay
    setTimeout(() => setFeedback(''), 1000);
  };

  const resetGame = () => {
    setTargetColor(generateRandomColor());
    setSelectedColor('');
    setScore(0);
    setAttempts(5);
    setFeedback('');
  };

  return (
    <div style={styles.container}>
       {attempts > 0 ? (
        <>
          <p>Attempts left: {attempts}</p>
          <p>Score: {score}</p>
          <div style={{ ...styles.colorBox, backgroundColor: targetColor }}></div>
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            style={styles.colorInput}
          />
          <button onClick={checkMatch} style={styles.button}>
            Check Match
          </button>
          {feedback && (
            <p
              style={{
                ...styles.feedback,
                color: feedback === 'Matched!' ? '#28a745' : '#dc3545',
              }}
            >
              {feedback}
            </p>
          )}
        </>
      ) : (
        <>
          <p>Game Over! Your score is: {score}</p>
          <button onClick={resetGame} style={styles.button}>Play Again</button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  colorBox: {
    width: '100px',
    height: '100px',
    margin: '20px 0',
    borderRadius: '10px',
    border: '2px solid #000',
  },
  colorInput: {
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#A9014C',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  feedback: {
    fontSize: '1.2rem',
    marginTop: '10px',
  },
};

export default ColorMatching;
