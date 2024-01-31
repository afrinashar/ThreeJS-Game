import React from 'react'
import { useState } from "react";
import "../App.css";import zero from "../assets/0.png";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
 import { Button, Modal } from "react-bootstrap"; 
const Dice = () => {
    var Add = [7, 2, 4, 1, 3, 5];
    
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [comment, setComment] = useState("");
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);
    const [image, setImage] = useState("");
    const [high, setHigh] = useState(0);
    const [name, setName] = useState("");  
    const handleChange = (event) => {
      setName(event.target.value);
      window.localStorage.setItem("nams", name);
    };
    const handleChage = (e) => {
      setInput(e.target.value);
    };
    // window.localStorage.setItem("nams", input);
    const output = Math.floor(Math.random() * 6);
    let res = window.localStorage.getItem("nams");
    //const result = output == 1 ? "one" : "two";
  
    if (input == output) {
      setComment("well done, roll again");
      //alert("well done, roll again");
      setScore(score + 1);
    } else if (output !== input) {
      //   alert("better Luck next time");
      //setComment("better Luck next time");
    }
    const handleClick = (e) => {
      const na = e.target.name;
      //   const pics =(e.target.name)==0?one:(e.target.name)==1?two:(e.target.name)==2?three:(e.target.name)==3?four:(e.target.name)==4?five:(e.target.name)==5?six:two
      const pics =
        output == 0
          ? one
          : output == 1
          ? two
          : output == 2
          ? three
          : output == 3
          ? four
          : output == 4
          ? five
          : output == 5
          ? six
          : zero;
      setImage(pics);
      setInput(e.target.name);
      console.log(na, output, "value", res, image);
    };
    localStorage.setItem("name", name);
    let myName = localStorage.getItem("name");
  
    console.log(output);
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      // window.localStorage.setItem("nams", (e.target.name.value));
      setName(e.target.value);
    };
    //  const username = localStorage.getItem('nams')
    //   { value: 1, label: 2 },
    //   { value: 2, label: 3 },
    //   { value: 3, label: 4 },
    //   { value: 4, label: 5 },
    //   { value: 5, label: 6 },
    // ];
    // console.log(options.value);
    return (
      <>
        <div className="nav">
          <h1>Play with FERO</h1>
        </div>
        <div className="top">
          <h3>
            <strong>Name:</strong>
            {name}
          </h3>
          <h3>
            <strong>Score:</strong>
            {score}
          </h3>
          <h3>
            <strong>Highest Score:</strong>
            {high}
          </h3>
        </div>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={show}>
            {" "}
            <Modal.Header>
              
              <form onSubmit={handleSubmit}>
                {" "}
                <input type="text" value={name} onChange={handleChange} />
                <button onClick={handleClose}>submit</button>
              </form>
            </Modal.Header>
          </Modal>
        </div>
        
        <button onClick={handleClick} name="0" className="btn">
          1
        </button>{" "}
        <button onClick={handleClick} name="1" className="btn">
          2
        </button>
        <button onClick={handleClick} name="2" className="btn">
          3
        </button>
        <button onClick={handleClick} name="3" className="btn">
          4
        </button>
        <button onClick={handleClick} name="4" className="btn">
          5
        </button>
        <button onClick={handleClick} name="5" className="btn">
          6
        </button>
        <h1>{output}</h1>
        {comment}
        {input}
         <div>
          <img
            className="bg-primary border border-black"
            src={image}
            height={100}
            width={100}
          ></img>
        </div>
      </>
    );
  }
  
export default Dice
