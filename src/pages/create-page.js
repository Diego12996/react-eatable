import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { createDish } from "../services/dishes-services";

function CreateDish() {
  const navigate = useNavigate();
  const dataFormStorage = JSON.parse(localStorage.getItem("dataDish"));

  const [dataForm, setDataForm] = useState({
    name: dataFormStorage?.name || "",
    price: dataFormStorage?.price || "",
    description: dataFormStorage?.description ||"",
    category: dataFormStorage?.category || "",
    picture_url: dataFormStorage?.picture_url || ""
  })

  const { name, price, description, category, picture_url} = dataForm;

  useEffect(() => {
    localStorage.setItem("dataDish", JSON.stringify(dataForm))
  }, [dataForm])

  function handleChange(e) {
    const { name, value } = e.target
    setDataForm({ ...dataForm, [name]: value})
  }

  function handleSubmit(e) {
    localStorage.removeItem("dataDish")
    e.preventDefault();
    createDish(dataForm)
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input 
          prop={"name"} 
          value={name} 
          label={"Name"} 
          onChange={handleChange} 
        />
        <Input 
          prop={"price"} 
          value={price} 
          label={"price"} 
          onChange={handleChange} 
        />
        <Input 
          prop={"description"} 
          value={description} 
          label={"Description"} 
          onChange={handleChange} 
        />
        <Input 
          prop={"category"} 
          value={category} 
          label={"Category"} 
          onChange={handleChange} 
        />
        <Input 
          prop={"picture_url"} 
          value={picture_url} 
          label={"Picture_url"} 
          onChange={handleChange} 
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default CreateDish;