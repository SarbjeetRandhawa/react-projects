import { useEffect, useState } from "react"
import styled from "styled-components"
import Searchresult from "./components/Searchresult";

export const BASE_URL = "http://localhost:9000";


function App() {

  const [Data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [filterdata, setfilterdata] = useState(null);
  const [selectedbtn, setSelectedbtn] = useState("all")


  useEffect(() => {

    const fetchFoodData = async () => {
      setloading(true);
      try {

        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setfilterdata(json);
        setloading(false);
      } catch (error) {
        seterror("unable to fetch data");
      }

    }
    fetchFoodData();
  }, []);


  const searchfood = (e) => {
    const searchvalue = e.target.value;

    if (searchvalue == "") {
      setfilterdata(null);
    }
    const filter = Data?.filter((food) => food.name.toLowerCase().includes(searchvalue.toLowerCase()));
    setfilterdata(filter);
  }

  const filterfood = (type) => {
    if (type == "all") {
      setfilterdata(Data);
      setSelectedbtn("all");
      return;

    }
    
    const filter = Data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setSelectedbtn(type)
    setfilterdata(filter);


  }

  const filterbtns = [
    {
      name:"All",
      type : "all",
    },
    {
      name:"Breakfast",
      type : "breakfast",
    },
    {
      name:"Lunch",
      type : "lunch",
    },
    {
      name:"Dinner",
      type : "dinner",
    }
  ]


  if (error) {
    return <div>{error}</div>

  }
  if (loading) {
    return (
      <div>Loading.....</div>
    )
  }
  // console.log(Data);

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food" onChange={searchfood} />
        </div>

      </TopContainer>

      <FilterContainer>

        {
          filterbtns.map((value)=>(
            <Button 
            isSelected={selectedbtn== value.type}
            key={value.name} onClick={()=>filterfood(value.type)}> {value.name}</Button>
          ))
        }


      </FilterContainer>

      <Searchresult data={filterdata} />



    </Container>
  )
}

export default App
const Container = styled.div`
 background-color:#323334;
 margin: 0 auto;

  
 `
const TopContainer = styled.section`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 2px solid white;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 14px;
      padding: 4px;
    }

  }
  @media (0 < width < 600px ){
    flex-direction: column;
    height: 120px;
  }
  
  `
const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 40px;

  `
export const Button = styled.button`
    background:${({isSelected})=>(isSelected?"#7e0101":"#ff4343")};
    border-radius: 5px;
    padding: 6px 12px;
    font-weight: 700;
    color: white;
   `
