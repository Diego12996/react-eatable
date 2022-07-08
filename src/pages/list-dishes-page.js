import { useEffect, useState } from "react";
import { deleteDish, getDishes } from "../services/dishes-services";
import styled from '@emotion/styled'
import { colors } from "../styles/colors";
import { RiEditBoxFill, RiDeleteBinFill } from 'react-icons/ri'
import { Link } from "react-router-dom";

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

const ButtonMedium = styled.button`
  border: none;
  width: 262px;
  height: 47px;
  color: white;
  border-radius: 30px;
  background: #FA4A0C;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  padding: 12px 16px;

`

const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  background: #F6F6F9;
  border-radius: 20px;
`

function ConfirmDelete() {
  return (
    <DeleteModal>
      <h3>Are you sure?</h3>
      <ButtonMedium>Yes, delete it!</ButtonMedium>
      <ButtonMedium>No, cancel!</ButtonMedium>
    </DeleteModal>
  )
}

function ListDishes() {
  function DishCard({dish}) {
    function Borrar() {
      deleteDish(dish.id)
    }
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
            <RiDeleteBinFill onClick={Borrar}/>
          </Icons>
        </DishInfo>
      </FoodCard>
    )
  }

  const Modal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000000bf;
    display: flex;
    justify-content: center;
    align-items: center;
  `

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
      <Link to="/create">Create Product</Link>
      <Modal>
        <ConfirmDelete />
      </Modal>
    </div>
  );
}

export default ListDishes;