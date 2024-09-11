import React, { useState, useEffect } from 'react';
import basket from "../src/assets/basket.png";
import apple from "../src/assets/apple.png";
import newton from "../src/assets/newton.png";

const CatchGame = () => {
  const [position, setPosition] = useState(50); // Player's position
  const [objectPosition, setObjectPosition] = useState({ x: Math.random() * 100, y: 0 }); // Falling object's position
  const [score, setScore] = useState(0); // Player's score
  const [misses, setMisses] = useState(0); // Count of missed objects
  const [gameOver, setGameOver] = useState(false);

  // Move the falling object down at intervals
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setObjectPosition((prev) => {
        if (prev.y >= 100) {
          // Object missed, reset it to top and increment missed count
          setMisses(misses + 1);
          if (misses >= 2) {
            setGameOver(true);
            clearInterval(interval);
          }
          return { x: Math.random() * 100, y: 0 };
        }
        return { x: prev.x, y: prev.y + 1 };
      });
    }, 50); // Object falls every 50ms

    return () => clearInterval(interval);
  }, [misses, gameOver]);

  // Handle mouse movement to control player's position
  const handleCatch = (e) => {
    setPosition((e.clientX / window.innerWidth) * 100);
  };

  // Detect if player catches the object
  useEffect(() => {
    if (
      Math.abs(position - objectPosition.x) < 5 && // Horizontal proximity
      objectPosition.y >= 95 // Close to the bottom
    ) {
      setScore(score + 1);
      setObjectPosition({ x: Math.random() * 100, y: 0 }); // Reset the falling object
    }
  }, [position, objectPosition, score]);

  // Restart the game
  const restartGame = () => {
    setScore(0);
    setMisses(0);
    setGameOver(false);
    setObjectPosition({ x: Math.random() * 100, y: 0 });
  };

  return (
    <div
      onMouseMove={handleCatch}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundColor: 'rgb(180 235 164)',
        overflow: 'hidden',
      }}
    >
      <h2>Score: {score}</h2>
      <h3>Misses: {misses} / 3</h3>
      {gameOver && <><img  width={250} src={newton} /> <h1>Game Over</h1></> }

      {/* Player (Basket) */}
      <div
        style={{
          position: 'absolute',
          left: `${position}%`,
          bottom: 0,
          width: 50,
          height: 50,
          backgroundImage: `url(${basket})`, // Replacing with basket image
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 10, // Ensures the basket is above other elements

        }}
      />

      {/* Falling Object (Apple) */}
      <div
        style={{
          position: 'absolute',
          top: `${objectPosition.y}%`,
          left: `${objectPosition.x}%`,
          width: 30,
          height: 30,
          backgroundImage: `url(${apple})`, // Replacing with apple image
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {gameOver && (
        <button
          onClick={restartGame}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default CatchGame;
