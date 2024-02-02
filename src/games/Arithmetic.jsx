import React,{useState} from 'react'
import Timer from '../components/Timer';
import { Link } from 'react-router-dom';

const Arithmetic = () => { const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);
  const [sum, setSum] = useState(0);
  const [score, setScore] = useState(0);

  const generateQuestion = () => {
    setNum1(Math.ceil(Math.random() * 10));
    setNum2(Math.ceil(Math.random() * 10));
  };
 
  const submit = (e) => {
    e.preventDefault();
    const formValid = +sum >= 0;
    if (!formValid) {
      return;
    }
    if (+num1 + +num2 === +sum) {
      setScore((score) => score + 1);
    }
    generateQuestion();
  };
  const start = () => { 
    window.location.reload();
   
  };
  return (
    <div className="App"> 
    <h1 className='bg-warning'>Find the Sum</h1>
     <Link  className=' btn  float-start btn-warning' to="/">Back</Link>   <h1 className='float-end'>score: {score}</h1> <form onSubmit={submit}>
        <div>
          <h3>
            {num1} + {num2}</h3> 
          
          <input className='bg-dark text-warning' type='number' value={sum} onChange={(e) => setSum(e.target.value)} />
        </div>

        <button className=' btn btn-warning' type="submit">Submit</button>
      </form>
      <button type="button" onClick={generateQuestion}>
      next
      </button>
    
    </div>
  );
}

export default Arithmetic
