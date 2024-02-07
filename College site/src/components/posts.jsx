import styled from "styled-components"
import Stories from "./stories"
import NewPost from "./NewPost"
import Userposts from "./userposts"



const Posts = ({isphnview}) => {
 

  return (
    <Post>
      {isphnview?(<Stories/>):("")}
      <NewPost/>
      <Userposts/>

      
      

    </Post>
  )
}

export default Posts

const Post = styled.div`
    

     margin: 0 auto;
    
    width: 40%;
    @media(0 < width < 1230px){
      margin-left: 70px;
      overflow: hidden;
      margin-right: 30%;
      width: 100%;
    }
`

