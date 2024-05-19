
import CourseBuilder from './components/CourseBuilder';
import styled from 'styled-components';
import './index.css'



const App = () => {

  return (
    <Div className="app">
      <CourseBuilder />
    </Div>
  );
};

export default App;

const Div = styled.div`
height: 100vh;
background-color:#ededed ;
  
`