import React, { useState, useEffect } from 'react';
import bg from "../src/assets/escaperoom.jpg"
const EscapeRoom = () => {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');
  const [validCommand, setValidCommand] = useState('');

  // Valid commands for each step
  const commands = [
    { step: 0, valid: ['open', 'look around', 'inspect door', 'examine', 'feel the walls', 'shout', 'turn on light', 'search room', 'knock on door', 'check corners'], message: 'The room is dark and cold. What will you do?' },
    { step: 1, valid: ['unlock', 'use key', 'pick lock', 'break lock', 'disable lock', 'smash the door', 'wiggle handle', 'turn knob', 'force open', 'move door'], message: 'You see a locked door. Maybe you need to unlock it?' },
    { step: 2, valid: ['escape', 'leave', 'exit', 'run out', 'dash out', 'break free', 'push door', 'step out', 'flee', 'get out'], message: 'The door is unlocked! You can escape now.' }
  ];

  // Randomly choose a command from the valid commands for the current step
  useEffect(() => {
    setValidCommand(
      commands[step].valid[Math.floor(Math.random() * commands[step].valid.length)]
    );
    setMessage(commands[step].message);
  }, [step]);

  const handleSubmit = () => {
    const command = input.toLowerCase().trim();

    // Check if the input matches any valid command for the current step
    if (commands[step].valid.includes(command)) {
      if (step === 2) {
        alert('Congratulations! You have escaped the room!');
        resetGame();
      } else {
        setStep(step + 1);
      }
      setHint('');
    } else {
      setHint(`Hint: Try using '${validCommand}' or something similar.`);
    }

    setInput('');
  };

  const resetGame = () => {
    setStep(0);
    setInput('');
    setHint('');
  };

  return (
    <div style={styles.container}>
       <p style={styles.step}>Step {step + 1}</p>
      <p style={styles.message}>{message}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Try typing: ${validCommand}`}
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>Submit</button>
      {hint && <p style={styles.hint}>{hint}</p>}
      {step === 2 && <p style={styles.congrats}>You're almost there, just escape!</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
   // background: 'linear-gradient(180deg, #222, #555)',
   backgroundImage: `url(${bg})`,
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  step: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1.2rem',
    textAlign: 'center',
    margin: '20px 0',
    width: '80%',
    maxWidth: '500px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '80%',
    maxWidth: '300px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  hint: {
    color: '#f8d7da',
    backgroundColor: '#721c24',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px',
    width: '80%',
    maxWidth: '300px',
    textAlign: 'center',
  },
  congrats: {
    fontSize: '1.2rem',
    marginTop: '20px',
    color: '#ffd700',
  },
};

export default EscapeRoom;
