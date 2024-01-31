import React from 'react'

const TicTac = () => { const computert = "nonw" ;const handle = (e) => {  
  console.log(e.target.name, );
};
  return (
    <>
      <div className="board2  custom-cursor border">
        {Array.from({ length: 9 }, (_, index) => (
          <button
            key={index}
            className={`cell2  border border-info ${computer === index + 1 ? "perry" : ""}`}
            name={index}
            onClick={handle}
          >
            
          </button>
        ))}
      </div>
    </>
  )
}

export default TicTac
