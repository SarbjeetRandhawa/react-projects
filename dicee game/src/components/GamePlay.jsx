import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import React from "react"
import { Button, OutlineButton } from "../styled/button"
import { useState } from "react"
import RollDice from "./RollDice"
import Rules from "./Rules"


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(6);
  const [error,seterror] = useState();
  const [visible,setVisible] = useState(false);

  const genraterandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    if(!selectedNumber) {
      seterror("You Have not Selected any Number")
      return
    }
 

    
   

    const randomNumber = genraterandomnumber(1, 7);
    setCurrentDice((prev) => randomNumber);


    if(selectedNumber==randomNumber){
      setScore((prev)=>prev+randomNumber);
    }else{
      setScore((prev)=>prev-2);
    }
  }
  const resetScore = ()=>{
    setScore(0);
  }


  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector seterror={seterror}  selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}  error={error} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset Scores</Button>
        <OutlineButton onClick={()=>setVisible(prev=>!prev)} >{visible?"Hide":"Show"} Rules</OutlineButton>
      </div>
      {visible && <Rules/>}
    </Main>
  )
}

export default GamePlay

const Main = styled.div`

.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btns{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;

}


`;