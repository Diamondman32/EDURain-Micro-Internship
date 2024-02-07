import { useState } from "react"

const [turn, setTurn] = useState(1);
const [board, changeBoard] = useState({
  topLeft: "", topMiddle: "", topRight: "", 
  middleLeft: "", middle: "", middleRight: "",
  bottomLeft: "", bottomMiddle: "", bottomRight: ""
});

function updateBoard({position}) {
  //
  changeBoard(previousState => {
    return { ...previousState, {position}: "X" }
  })
  setTurn(turn+1)
}

function Tictactoe() {
  return (
    <ul>
      {board.map((position) => 
      <li><button id={position} type="button" onClick={updateBoard(position)}></button></li>
      )}
    </ul>
  );
}

function App() {
  return (
    <>
      <div>
        <Tictactoe />
      </div>
    </>
  )
}

export default App
