import React, { Component } from 'react';
import { createPizza } from './pizza-api.js';

export default class FormPage extends Component {
    state = {
        name: '',
        ingredients: '',
        meal: 'Breakfast',
        price: 0,
        delicious: true
    }

    handleMealChange = (e) => {
        this.setState({
            meal: e.target.value
        })
    }

    handleDeliciousChange = (e) => {
        this.setState({
            delicious: e.target.value
        })
    }

    handlePizzaChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleIngredientsChange = (e) => {
        this.setState({
            ingredients: e.target.value
        })
    }

    handlePriceChange = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        await createPizza({
            name: this.state.name,
            ingredients: this.state.ingredients,
            meal: this.state.meal,
            price: this.state.price,
            delicious: this.state.delicious
        });

    }

    render() {
        return (
            <div>
                <form>
                <input onChange={this.handlePizzaChange} placeholder="Pizza Name"></input>
                <input onChange={this.handleIngredientsChange} placeholder="Ingredients"></input>
                <select onChange={this.handleMealChange}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
                <input onChange={this.handlePriceChange} placeholder="Price"></input>
                <select onChange={this.handleDeliciousChange}>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
                <p>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </p>
                </form>
            </div>
        )
    }
}
