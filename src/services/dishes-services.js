const BASE_URL = "https://react-eatable-api.herokuapp.com"

export function getDishes() {
  return fetch(BASE_URL + "/products").then(response => response.json())
}

export function updateDish(id, data) {
  return fetch(`${BASE_URL}/products/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
}

export function deleteDish(id) {
  return fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE"
  })
}

export function createDish(newDishData) {
  return fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newDishData)
  })
}

export function getDish(id) {
  return fetch(`${BASE_URL}/products/${id}`).then(response => response.json())
}