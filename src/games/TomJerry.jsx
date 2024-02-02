import React,{useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import house from "../assets/house.jpg";import tom from "../assets/tom.png";import "./TomJerry.css";
const TomJerry = () => { 
    const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 3);  
      setRandomNumber(newRandomNumber);
    }, 3000);  

    return () => clearInterval(interval)  }, []);
const handle =(e)=>{console.log(e.target.name), newRandomNumber;}
  return (
    <> {randomNumber}
      <Container><Row name onClick={handle}><Col><img src={tom} className='tom' width={400} height={300}></img></Col><Col><img src={house}></img></Col></Row></Container>
    </>
  )
}

export default TomJerry
