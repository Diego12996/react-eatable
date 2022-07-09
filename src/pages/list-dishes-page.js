import { useEffect, useState } from "react";
import { deleteDish, getDishes } from "../services/dishes-services";
import styled from '@emotion/styled'
import { colors } from "../styles/colors";
import { RiEditBoxFill, RiDeleteBinFill } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { ButtonLarge, ButtonMedium, ContainerButton } from "../components/button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
`

const DishImage = styled.img`
  margin: 0 auto;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  position: relative;
  top: -38px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`

const FoodCard = styled.div`
  width: 156px;
  height: 250px;
`

const Title = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2.15rem;
`

const DishInfo = styled.div`
  border-radius: 30px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  background: white;
`

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  color: #FA4A0C;
  margin-top: 10px;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000bf;
  display: ${props => props.isOpen ? "flex" : "none"};
  justify-content: center;
  align-items: center;
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

function ListDishes() {
  const [dishes, setDishes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  function handleDeleteModal(id) {
    setCurrentId(id)
    setIsOpen(true)
  }

  function handleCancelDelete() {
    setIsOpen(false)
  }

  function handleConfirmDelete() {
    deleteDish(currentId)
    const newDishes = dishes.filter(dish => dish.id !== currentId)
    setIsOpen(false)
    setDishes(newDishes)
  }

  function ConfirmDelete() {
    return (
        <DeleteModal>
          <h3>Are you sure?</h3>
          <ButtonMedium onClick={handleConfirmDelete}>Yes, delete it!</ButtonMedium>
          <ButtonMedium style={{background: "#EFB60E" }} onClick={handleCancelDelete} >No, cancel!</ ButtonMedium>
        </DeleteModal>
    )
  }
  

  function DishCard({dish}) {

    return (
      <FoodCard>
        <DishInfo>
        <DishImage src={dish.picture_url} alt="dish delicious" />
          <p>{dish.name}</p>
          <p style={{color: "#FA4A0C"}}>{`$${dish.price}`}</p>
          <Icons>
            <Link to={`/update/${dish.id}`}>
              <RiEditBoxFill style={{width: "17px"}} />
            </Link>
            <RiDeleteBinFill style={{width: "17px"}} onClick={() => handleDeleteModal(dish.id)} />
          </Icons>
        </DishInfo>
      </FoodCard>
    )
  }

  useEffect(() => {
    getDishes()
      .then((data) => setDishes(data))
      .catch(console.log);
  }, []);

  return (
    <>
      <div style={{}}>
        <Title>Products Dashboard</Title>
        <Container>{dishes.map(dish=>(
            <DishCard key={dish.id} dish={dish} />
          ))}
        </Container>
        <ContainerButton>
          <Link style={{textDecoration: "none"}} to="/create">
            <ButtonLarge>Create Product</ButtonLarge>
          </Link>
        </ContainerButton>
        <Modal isOpen={isOpen}>
          <ConfirmDelete />
        </Modal>
      </div>
    </>
  );
}

export default ListDishes;