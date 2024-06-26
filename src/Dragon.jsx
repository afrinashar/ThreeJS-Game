// src/Game.js
import   { useState, useEffect } from 'react';
  import './dragon.css'
  const Dino = ({ dinoY }) => {
    const dinoStyle = {
      position: 'absolute',
      bottom: `${dinoY}px`,
      left: '50px',
      width: '50px',
      height: '50px',
      backgroundColor: 'gray',
    };
  
    return <div style={dinoStyle}></div>;
  };
  
  const Ground = () => {
    const groundStyle = {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      width: '100%',
      height: '25px',
      backgroundColor: 'green',
    };
  
    return <div style={groundStyle}></div>;
  };
  
  const Obstacle = ({ obstacleX }) => {
    const obstacleStyle = {
      position: 'absolute',
      bottom: '50px',
      left: `${obstacleX}px`,
      width: '20px',
      height: '50px',
      backgroundColor: 'brown',
    };
  
    return <div style={obstacleStyle}></div>;
  };
  
  const Dragon = () => {
    const [dinoY, setDinoY] = useState(0);
    const [obstacleX, setObstacleX] = useState(500);
    const [isJumping, setIsJumping] = useState(false);
    const [gameOver, setGameOver] = useState(false);
  
    useEffect(() => {
      const handleJump = () => {
        if (!isJumping) {
          setIsJumping(true);
          let jumpHeight = 0;
          const jumpInterval = setInterval(() => {
            if (jumpHeight > 100) {
              clearInterval(jumpInterval);
              const fallInterval = setInterval(() => {
                jumpHeight -= 2;
                setDinoY(jumpHeight);
                if (jumpHeight <= 0) {
                  clearInterval(fallInterval);
                  setIsJumping(false);
                }
              }, 20);
            } else {
              jumpHeight += 4;
              setDinoY(jumpHeight);
            }
          }, 20);
        }
      };
  
      const handleKeyDown = (event) => {
        if (event.code === 'Space') {
          handleJump();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [isJumping]);
  
    useEffect(() => {
      const obstacleInterval = setInterval(() => {
        setObstacleX((prevX) => {
          if (prevX < -20) {
            return 500;
          }
          return prevX - 4;
        });
      }, 20);
  
      return () => {
        clearInterval(obstacleInterval);
      };
    }, []);
  
    useEffect(() => {
      if (obstacleX < 70 && obstacleX > 30 && dinoY < 50) {
        setGameOver(true);
      }
    }, [obstacleX, dinoY]);
  
    return (
      <div>
        {gameOver ? (
          <div>Game Over</div>
        ) : (
          <>
            <Dino dinoY={dinoY} />
            <Ground />
            <Obstacle obstacleX={obstacleX} />
          </>
        )}
      </div>
    );
  };

export default Dragon;
