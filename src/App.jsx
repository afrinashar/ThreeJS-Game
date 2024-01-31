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
//import {TicTac} from './games/TicTac'
import { Clock } from "./components/Clock";
import Div from "./games/SnakeAndLadder";
import { Grossary } from "./games/Grossary";
import { Route, Routes, Link } from "react-router-dom";
import SpinningCube from "./games/Cube";
import Dashboard from "./Dashboard";
import MainApp from './games/Cards'
import { Drawing } from "./components/Drawing";
 function App() {
  return (
    <>
      <h1 className="text-light bg-danger">games Hub</h1>
 
      
      <Routes>   <Route exact path="/" element={<Dashboard />} /> 
        <Route exact path="/HideAndSeek" element={<Hide />} /> 
        <Route exact path="/Drawing" element={<Drawing />} /> 
        <Route exact path="/Arithmetic" element={<Arithmetic />} /> 
        <Route exact path="/scrumble" element={<Scramble />} /> 
        <Route exact path="/Tetris" element={<Tetrisg />} />
        <Route exact path="/DiceWar" element={<Dicewar />} />
        <Route exact path="/SnakeAndLadders" element={<Div />} />
        <Route exact path="/Puzzel" element={<Puzzel />} />
        <Route exact path="/cards" element={<MainApp />} />
        <Route exact path="/Dice" element={<Dice />} />        <Route exact path="/tictac" element={<Tictac/>} />
        <Route exact path="/SnakeAndLadders" element={<Div />} /> 
      </Routes>
     
      {/* <div style={{ height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
      </Canvas>
    </div> */}
    </>
  );
}

export default App;
