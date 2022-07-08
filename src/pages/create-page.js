import { useState } from "react";
import Input from "../components/input";
import { createDish } from "../services/dishes-services";

function CreateDish() {

  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: ""
  })

  const { name, price, description, category, picture_url} = data;

  function handleChange(e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    createDish(data)
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