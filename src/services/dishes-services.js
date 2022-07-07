const BASE_URL = "https://react-eatable-api.herokuapp.com"

export function getDishes() {
  return fetch(BASE_URL + "/products").then(response => response.json())
}