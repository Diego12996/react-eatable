import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/input";
import { getDish, updateDish } from "../services/dishes-services";

function EditDish() {

  const params = useParams()
  const [dataForm, setDataForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: ""
  })

  const { name, price, description, category, picture_url} = dataForm;

  useEffect(() => {
    getDish(parseInt(params.id))
      .then((data) => setDataForm(data))
      .catch(console.log);
  }, [params]);

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target
    setDataForm({ ...dataForm, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateDish(params.id, dataForm)
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

export default EditDish;