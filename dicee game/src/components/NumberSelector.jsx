
import { useState } from "react";
import styled from "styled-components"

const arrNumber = [1, 2, 3, 4, 5, 6];

const NumberSelector = ({selectedNumber,setSelectedNumber,error,seterror}) => {
const numberselectorhandler = (value)=>{
    setSelectedNumber(value)
    seterror("");
}
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {
                    arrNumber.map((value, i) => (
                        <Box
                            isSelected={value == selectedNumber}

                            key={i} onClick={() => numberselectorhandler(value) }>{value}
                            
                        </Box>
                    ))
                }

            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    
.flex{
    display: flex;
    gap: 24px;

}
p {
    font-size: 24px;
    font-weight: 700;
}
.error{
    color: red;
    font-size: ;
}
`

const Box = styled.div`

    height: 72px;
    border: 1px solid black;
    width: 72px;
    display: grid;
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};

    
`