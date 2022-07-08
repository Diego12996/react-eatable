const BASE_URL = "https://react-eatable-api.herokuapp.com"

export function getDishes() {
  return fetch(BASE_URL + "/products").then(response => response.json())
}

export function updateDish(id, data) {
  return fetch(`${BASE_URL}/products/${id}`,{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
}