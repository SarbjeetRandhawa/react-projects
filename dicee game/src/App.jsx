import { useState } from "react"
import Startgame from "./components/StartGame"
import GamePlay from "./components/GamePlay"


function App() {

  const [ isGameStarted, setIsGameStarted] = useState(false)

  const toogleGameplay = () =>
  {
    setIsGameStarted((prev)=>!prev)
  }
  return (
    <>
    {
      isGameStarted ? <GamePlay/>:<Startgame 
      toggle={toogleGameplay}/>
      
    }
    </>
  )
}

export default App
