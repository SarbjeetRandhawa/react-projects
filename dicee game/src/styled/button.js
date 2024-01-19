
import styled from "styled-components"

export const Button = styled.button`
background-color: black;
color: white;
padding: 10px 20px;
border-radius: 15px;
min-width: 220px;
font-size: 16px;
border: none;
cursor: pointer;
transition: 0.4s background ease-in;

&:hover{
  background-color: #ffffff;
  color: black;
  transition: 0.3s background ease-in;
  border: 1px solid black;
}


`


 export const OutlineButton = styled(Button)`
 background-color: white;
 border: 1px solid black;
 color: black;
 &:hover{
  background-color: black;
  color: white;
  
 
}
 `

