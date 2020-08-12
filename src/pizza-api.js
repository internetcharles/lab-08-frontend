import request from 'superagent';

const URL = 'https://calm-ocean-18506.herokuapp.com';

export function fetchPizzas() {
    return request.get(`${URL}/pizzas`)
}

export function fetchPizza(id) {
    return request.get(`${URL}/pizzas/${id}`)
}