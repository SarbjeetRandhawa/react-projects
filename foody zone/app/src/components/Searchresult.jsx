import styled from "styled-components";
import { BASE_URL, Button } from "../App";

const Searchresult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((food) => (
          <Foodcard key={food.name}>
            <div className="foodimg">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="foodinfo">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
              <Button>${food.price.toFixed(2)}</Button>
            </div>
          </Foodcard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default Searchresult;

const FoodCardContainer = styled.section`
  height: calc(100vh - 173px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.5)) ,url("/bg.png");
  
  

  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;

`;


const Foodcard = styled.div`

  display: flex;
  width: 340px;
  height: 167px;
  
  border: 0.66px solid;

  border-image-source: radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;



  backdrop-filter: blur(15px);
  border-radius: 15px;
  background-blend-mode: overlay, normal;
  .foodinfo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 10px;
    h3{
        margin-top: 8px;
        font-size: 16px;
        font-weight: 700;
    }
    p{
        margin-top: 4px;
        font-size: 12px;
    }
    button{
        font-size: 10px;
    }

  }
`;
