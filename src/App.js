import React from 'react';
import { fetchPizzas } from './pizza-api.js';
import './App.css';



class App extends React.Component {

  state = {
    pizzas: []
  }
  
  
  componentDidMount = async () => {
    const data = await fetchPizzas()
  
    this.setState({
      pizzas: data.body
    })
    console.log(this.state.pizzas);
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
            return <div key={pizza.name}>
            <h1>{pizza.name}</h1>
            <h2>{pizza.ingredients}</h2>
            <h2>${pizza.price}</h2>
            </div>
          })
        }
        </div>
        </div>
      </div>
    )
  }
}

export default App;
