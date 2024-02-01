import React from 'react'
import { Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";import { Link } from "react-router-dom";
import Hide from "./games/Hide";
import hide from "./assets/perryt.jpg";import drawing from "./assets/drawing.webp";
import snake from "./assets/snaket.jpg";import dice from "./assets/dice.jpg";
import tic from "./assets/tict.jpg";import test from "./assets/testrist.jpg";
const Dashboard = () => {
  return (
    <><Card className="fluid">
    <Link to="Drawing">
      <img src={drawing} className="fluid  w-100 p-5 "></img>
      <h1>Drawing</h1>
    </Link>
  </Card>
    <Row> <h1 className="text-light bg-danger">games Hub</h1>
 
        <Row>
          <Col>
            <Card className="fluid">
              <Link to="HideAndSeek">
                <img src={hide} className="fluid  w-100 p-5 "></img>
                <h1>Hide And Seek</h1>
              </Link>
            </Card>
          </Col><Col>
            <Card className="fluid">
              <Link to="Dice">
                <img src={dice} className="fluid  w-100 p-5 "></img>
                <h1>Lucky Roll</h1>
              </Link>
            </Card>
          </Col>
          
        </Row>
        <Row>
          <Col><Card>
              <Link to="TicTac">
                <img src={tic} className="fluid   w-100 p-5 "></img>
                <h1>Tic Tac Toe</h1>
              </Link>
            </Card></Col>
          <Col><Card>
              <Link to="SnakeAndLadders">
                <img src={hide} className="fluid w-100 p-5"></img>
                <h1>Snake And Ladders</h1>
              </Link>
            </Card></Col>
        </Row>
        <Row>
          <Col><Card>
              <Link to="DiceWar">
                <img src={dice} className="fluid w-100 p-5"></img>
                <h1>Lucky Number</h1>
              </Link>
            </Card></Col>
          <Col><Card>
              <Link to="TicTac">
                <img src={test} className="fluid wh-75 w-100 p-5 "></img>
                <h1>Testris</h1>
              </Link>
            </Card></Col>
        </Row>   <Row>
          <Col><Card>
              <Link to="DiceWar">
                <img src={dice} className="fluid w-100 p-5"></img>
                <h1>Lucky Number</h1>
              </Link>
            </Card></Col>
         <Col><Card>
              <Link to="SnakeAndLadders">
                <img src={snake} className="fluid  w-100 p-5 "></img>
                <h1>Snake And Ladders</h1>
              </Link>
            </Card></Col>
      </Row>  
        </Row>
    </>
  )
}

export default Dashboard
