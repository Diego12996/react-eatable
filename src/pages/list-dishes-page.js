import { useEffect, useState } from "react";
import { getDishes } from "../services/dishes-services";
import styled from '@emotion/styled'
import { colors } from "../styles/colors";
import { RiEditBoxFill, RiDeleteBinFill } from 'react-icons/ri'
import EditDish from "./edit-page";
import { Link, Routes } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const DishImage = styled.img`
  margin: 0 auto;
  width: 130px;
  height: 130px;
  border-radius: 50%;
`

const FoodCard = styled.div`
  width: 156px;
  height: 250px;
`

const DishInfo = styled.div`
  border-radius: 30px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  backgorund: ${colors.white};
`

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  color: #FA4A0C;
`

function ListDishes() {
  function DishCard({dish}) {
    return (
      <FoodCard>
        <DishImage src={dish.picture_url} alt="dish delicious" />
        <DishInfo>
          <h3>{dish.name}</h3>
          <h3 style={{color: "#FA4A0C"}}>{`$${dish.price}`}</h3>
          <Icons>
            <Link to={`/update/${dish.id}`}>
              <RiEditBoxFill />
            </Link>
            <RiDeleteBinFill />
          </Icons>
        </DishInfo>
      </FoodCard>
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
      <Container>{dishes.map(dish=>(
        <DishCard key={dish.id} dish={dish} />
        ))}
      </Container>
    </div>
  );
}

export default ListDishes;