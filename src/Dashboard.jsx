import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css"; // Ensure your CSS is set up to handle custom styling
import tom from "./assets/tomjerry.jpg";
import sum from "./assets/sum.png";
import hide from "./assets/perryt.jpg";
import jb from "./assets/jb.jpg";
import snake from "./assets/snaket.jpg";
import dice from "./assets/dice.jpg";
import tic from "./assets/tict.jpg";
import test from "./assets/testrist.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard-container text-center p-5">
      <h1 className="text-light bg-primary rounded p-3 mb-4">Games Hub</h1>
      <Row className="g-4">
        {[
          { img: jb, title: "BATMAN vs JOKER", link: "batman" },
          { img: hide, title: "Hide And Seek", link: "HideAndSeek" },
          { img: dice, title: "Lucky Roll", link: "Dice" },
          { img: tom, title: "Tom and Jerry", link: "tom" },
          { img: sum, title: "Find Sum", link: "Arithmetic" },
          { img: dice, title: "Lucky Number", link: "DiceWar" },
          { img: test, title: "Tetris", link: "Tetris" },
          { img: tic, title: "Tic Tac Toe", link: "TicTac" },
          { img: snake, title: "Snake And Ladders", link: "SnakeAndLadders" },
        ].map((game, index) => (
          <Col md={4} key={index}>
            <Card className="game-card shadow-lg">
              <Link to={game.link} className="text-decoration-none text-dark">
                <Card.Img variant="top" src={game.img} className="game-img" />
                <Card.Body>
                  <Card.Title className="fw-bold fs-3">
                    {game.title}
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
