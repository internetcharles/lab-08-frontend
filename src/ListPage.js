import React from 'react';
import { fetchPizzas } from './pizza-api.js';
import './App.css';
import { Link } from 'react-router-dom'



class ListPage extends React.Component {

  state = {
    pizzas: []
  }
  
  
  componentDidMount = async () => {
    const data = await fetchPizzas()
  
    this.setState({
      pizzas: data.body
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="text-box">
        <h1>Bongo's Pizza Repository</h1>
        <h1>Pizzas:</h1>
        {
          this.state.pizzas.map((pizza) => {
            return <Link className="pizza" to={`/pizzas/${pizza.id}`} key={`${pizza.id}`}>
            <div key={pizza.name}>
            <h1>{pizza.name}</h1>
            <h2>{pizza.ingredients}</h2>
            <h2>${pizza.price}</h2>
            </div>
            </Link>
          })
        }
        </div>
        </div>
      </div>
    )
  }
}

export default ListPage;
