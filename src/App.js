import { Route, Routes } from "react-router-dom";
import CreateDish from "./pages/create-page";
import EditDish from "./pages/edit-page";
import ListDishes from "./pages/list-dishes-page";

function App() {
  
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <ListDishes />
        }
      />
      <Route 
        path="/update/:id"
        element={
          <EditDish />
        }
      />
      <Route
        path="/create"
        element={
          <CreateDish />
        }
      />
    </Routes>
  )
}

export default App;
