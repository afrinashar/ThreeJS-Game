 import Tetris from 'react-tetris'
const Tetrisg = () => {
  return (<><div className='bg-primary'>
  <h1 className='bg-light'>TETRIS</h1>
    <Tetris
     keyboardControls={{
      // Default values shown here. These will be used if no
      // `keyboardControls` prop is provided.
      down: 'MOVE_DOWN',
      left: 'MOVE_LEFT',
      right: 'MOVE_RIGHT',
      space: 'HARD_DROP',
      z: 'FLIP_COUNTERCLOCKWISE',
      x: 'FLIP_CLOCKWISE',
      up: 'FLIP_CLOCKWISE',
      p: 'TOGGLE_PAUSE',
      c: 'HOLD',
      shift: 'HOLD'
    }}
  >
    {({keyboardControls,
      HeldPiece,
      Gameboard,
      PieceQueue,
      points,
      linesCleared,
      state,
      controller
    }) => (
      <div>
        <HeldPiece />
        <div>
          <p>Points: {points}</p>
          <p>Lines Cleared: {linesCleared}</p>
        </div>
        <Gameboard />
        <PieceQueue /> {keyboardControls}
        {state === 'LOST' && (
          <div>
            <h2>Game Over</h2>
            <button onClick={controller.restart}>New game</button>
          </div>
        )}
      </div>
    )}
  </Tetris>
 </div></> )
}

export default Tetrisg
