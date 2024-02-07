import styled from "styled-components";
import Features from "./features";
import Posts from "./posts";
import Activities from "./activities";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [isphnview , setIsphnview] = useState(false);
  
  // check for viewport for stories
  useEffect(()=>{
    const checkifphnview = ()=>{
      const phnview = window.innerWidth < 1230 ; 
      setIsphnview(phnview);
    }


    checkifphnview();

    window.addEventListener('resize', checkifphnview);

    return () => {
      window.removeEventListener('resize', checkifphnview);
    };
  },[])
  return (
    <Main>
      <Features  />
      <Posts isphnview={isphnview}/>
      <Activities isphnview={isphnview}/>
    </Main>
  );
};

export default Body;

const Main = styled.div`
 background-color: var(--background);
  display: flex;
  gap: 10px;
  padding-top: 60px;
  width: 100%;
  
`;
