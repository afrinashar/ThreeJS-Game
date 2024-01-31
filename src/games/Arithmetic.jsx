import React,{useState} from 'react'

const Arithmetic = () => {  const [message, setMessage] = useState("ww");  const [positionOne, setPositionOne] = useState(1);
const randomOne = Math.floor(Math.random() * 99);
const randomTwo = Math.floor(Math.random() * 99);
const result=randomOne+randomTwo
const handle=(e)=>{
  e.preventDefault()  
  const user=(e.target.value)
  const result= (user==randomTwo)?"correct":"wrong"
  setMessage(message + result)
console.log((e.target.value),message,randomTwo,user);
}
return (
    <>
      <h1>Get the Answer</h1>
      <h3>{randomOne}+___ = {result}</h3>
     <form ><input type='number' onChange={handle} ></input> <button type='button' onSubmit={handle} > submit</button></form> 
      {message}
    </>
  )
}

export default Arithmetic
