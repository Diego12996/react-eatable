import { useEffect, useState } from "react";
import { getDishes } from "../services/dishes-services";
import styled from '@emotion/styled'

const DishImage = styled.img`
  margin: 0 auto;
  max-width: 130px;
  border-radius: 50%;
`

const FoodCard = styled.div`
  display: flex;
  width: 156px;
  height: 250px;
`

const DishInfo = styled.div`
  border-radius:
  
`


function ListDishes() {
  function DishCard({dish}) {
    return (
      <div>
        <img src={dish.picture_url} alt="dish delicious" />
        <h3>{dish.name}</h3>
        <h3>{`$${dish.price}`}</h3>
      </div>
    )
  }

  const [dishes, setDishes] = useState([]);
  
  useEffect(() => {
    getDishes()
      .then((data) => setDishes(data))
      .catch(console.log);
  }, []);

  return (
    <div>
      <h1>Products Dashboard</h1>
      <p>{dishes.map(dish=>(
        <DishCard dish={dish} />
      ))}</p>
    </div>
  );
}

export default ListDishes;