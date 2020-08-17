import React, { Component } from 'react';
import { createPizza, fetchOrigin } from './pizza-api.js';

export default class FormPage extends Component {
    state = {
        name: '',
        ingredients: '',
        meal: 'Breakfast',
        price: 0,
        delicious: true,
        origin_id: 1,
        origins: []
    }

    componentDidMount = async () => {
        const originData = await fetchOrigin();

        this.setState({
            origins: originData.body
        })
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
    
    handleOriginChange = (e) => {
        this.setState({
            origin_id: e.target.value
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
            delicious: this.state.delicious,
            origin_id: this.state.origin_id
        });

        this.props.history.push('/');

    }

    render() {
        return (
            <div className="my-form">
                <form>
                <input onChange={this.handlePizzaChange} placeholder="Pizza Name"></input>
                <br />
                <input onChange={this.handleIngredientsChange} placeholder="Ingredients"></input>
                <br />
                <select onChange={this.handleMealChange}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
                <br />
                <input onChange={this.handlePriceChange} placeholder="Price"></input>
                <br />
                <div>Is delicious?</div>
                <select onChange={this.handleDeliciousChange}>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
                <p>Origin:</p>
                <select onChange={this.handleOriginChange}>
                    {
                        this.state.origins.map(orig => <option value={orig.id}>{orig.origin}</option>)
                    }
                </select>
                <p>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </p>
                </form>
            </div>
        )
    }
}
