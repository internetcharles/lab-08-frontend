import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchPizzas() {
    return request.get(`${URL}/pizzas`)
}

export function fetchPizza(id) {
    return request.get(`${URL}/pizzas/${id}`)
}

export function createPizza(pizzaData) {
    return request.post(`${URL}/pizzas`, pizzaData)
}

export function fetchOrigin() {
    return request.get(`${URL}/origin`)
}

export function updatePizza(id, updatedPizza) {
    return request.put(`${URL}/pizzas/${id}`, updatedPizza)
}

export function deletePizza(id) {
    return request.delete(`${URL}/pizzas/${id}`)
}