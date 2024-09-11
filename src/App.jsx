import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
import "./App.css";
import Hide from "./games/Hide";
import Tetrisg from "./games/Tetris";
import Dice from "./games/Dice";
import Dicewar from "./games/Dicewar";
import Scramble from "./games/Scramble";
import Tictac from "./games/Tictac";
import Arithmetic from "./games/Arithmetic";
import Puzzel from "./games/Puzzel";
import hide from "./assets/perryt.jpg";
import snake from "./assets/snaket.jpg";
import tic from "./assets/tict.jpg";import test from "./assets/testrist.jpg";
 import { Clock } from "./components/Clock";
import Div from "./games/SnakeAndLadder";
import { Grossary } from "./games/Grossary";
import { Route, Routes, Link } from "react-router-dom";
import SpinningCube from "./games/Cube";
import Dashboard from "./Dashboard";
import TomJerry from "./games/TomJerry";
import MainApp from './games/Cards'
import { Drawing } from "./components/Drawing";
import Dragon from "./Dragon";
import AddNumbers from "./AddNumbers";
import RockPaperScissors from "./games/RockPaperScissors";
import MazeGame from "./Maze";
import MemoryGame from "./MemoryGame";
import SimonGame from "./Simon";
import PongGame from "./Pong";
import WordleClone from "./Wordle";
import WhackAMole from "./WhakeAMole";
import SnakeGame from "./SnakeGame";
import Sudoku from "./Sudoku";
import Battleship from "./Battleship";
import BubbleShooter from "./BubbleShooter";
import Minesweeper from "./Minesweeper";
import Hangman from "./Hangman";
import FlappyBird from "./FlappyBird";
import EscapeRoom from "./EscapeRoom";
import ConnectFour from "./ConnectFour";
import ColorMatching from "./ColorMatching";
import CatchGame from "./CatchGame";
import Charades from "./Charads";
import AppRoutes from "./Routes";
 function App() {
  return (
    <div className="App">
      { /*<Navbar />  Display navbar */}
      <AppRoutes />  {/* Use the dynamically generated routes */}
    </div>
  );
 
}

export default App;
