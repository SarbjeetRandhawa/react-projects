import styled from "styled-components"
import { Button } from "../styled/button"
// import React from "react"

const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="/dices.png" alt="hlo"/>

      </div>
      <div className="content">
        <h1>
          Dice Game
        </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
  max-width: 1180px;
  display:  flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
    
    
  }


`