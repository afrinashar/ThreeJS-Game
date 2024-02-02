import React,{useState} from 'react'
import Timer from '../components/Timer';
import { Link } from 'react-router-dom';

const Arithmetic = () => { const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
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
    <div className="App"><Timer initialSeconds={30}/>
   <button onClick={start}></button>  <Link  className=' btn  btn-warning' to="/">Back</Link>  <form onSubmit={submit}>
        <div>
          <h3>
            {num1} + {num2}</h3> 
          
          <input value={sum} onChange={(e) => setSum(e.target.value)} />
        </div>

        <button className=' btn btn-danger' type="submit">Submit</button>
      </form>
      <button type="button" onClick={generateQuestion}>
      next
      </button>
      <p>score: {score}</p>
    </div>
  );
}

export default Arithmetic
