import styled from "styled-components";
import Stories from "./stories";
import Events from "./events";
import Society from "./Society";

const activities = ({isphnview}) => {
  return (
    <Container>
      {isphnview?(""):(<Stories/>)}
      
      <Events/>
      <Society/>


      
    </Container>
  );
};

export default activities;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  position: fixed;
  gap: 10px;
  right: 0;

  border-left: 0.5px solid var(--border);
  height: calc(100vh - 60px);
  padding: 20px 40px;
  width: 30%;

 
  

`;
