
import styled from "styled-components"


const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click an dice image</p>
            <p>
                after click on dice if selected number is equal to dice number you will get same point as dice{" "}
            </p>
            <p>if you get wrong guess then 2 points will be deducted</p>
        </div>

    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`

  
    background-color: #fbf1f1;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    margin-top: 40px;
  
    
    
    h2{
        font-size: 24px;
        
    }
    .text{
        margin-top: 24px;
        p{
            margin-top: -10px;
        }
    }
`