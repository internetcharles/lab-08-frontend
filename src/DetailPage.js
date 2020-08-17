import React, { Component } from 'react'
import { fetchPizza, fetchOrigin, updatePizza, deletePizza } from './pizza-api.js'

export default class DetailPage extends Component {

    state = {
        pizza: {},
        name: '',
        ingredients: '',
        meal: 'breakfast',
        price: 0,
        delicious: true,
        origin_id: 1,
        origins: []
    }

    componentDidMount = async() => {
        const data = await fetchPizza(this.props.match.params.id);
        const originData = await fetchOrigin();

        console.log(originData.body)

        const matchingOrigin = originData.body.find(origin => origin.origin = data.body.origin);

        console.log(matchingOrigin)

        this.setState({
            pizza: data.body,
            origins: originData.body,
            name: data.body.name,
            ingredients: data.body.ingredients,
            price: data.body.price,
            meal: data.body.meal,
            delicious: data.body.delicious,
            origin_id: matchingOrigin.id
        })

        console.log(this.state.origins)
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleIngredientsChange = (e) => {
        this.setState({ ingredients: e.target.value })
    }

    handlePriceChange = (e) => {
        this.setState({ price: e.target.value })
    }

    handleDeliciousChange = (e) => {
        this.setState({ delicious: e.target.value })
    }

    handleOriginChange = (e) => {
        this.setState({ origin_id: e.target.value })
    }

    handleMealChange = (e) => {
        this.setState({ meal: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePizza(
                this.props.match.params.id,
                {
                    name: this.state.name,
                    ingredients: this.state.ingredients,
                    meal: this.state.meal,
                    price: this.state.price,
                    delicious: this.state.delicious,
                    origin_id: this.state.origin_id
                }
            );

            const updatedPizza = await fetchPizza(this.props.match.params.id);

            this.setState({
                pizza: updatedPizza.body,
                brand_id: 1
            })

            this.props.history.push('/');
        }
        catch (e) {
            console.log(e.message)
        }
    }

    handleDelete = async () => {
        await deletePizza(this.props.match.params.id)

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="ingredients-box">
                <p>This pizza is called the {this.state.pizza.name}.</p>
                <p>Ingredients: {this.state.pizza.ingredients}.</p>
                <p>It costs ${this.state.pizza.price}.</p>
                <p>It's meant for {this.state.pizza.meal}</p>
                <p>It's from {this.state.pizza.origin}</p>
                { this.state.pizza.delicious ? <p>It's delicious</p> : <p>It's disgusting!</p> }

                <p>UPDATE THIS PIZZA?</p>
                <form onSubmit={this.handleSubmit}>
                    <p>Name:<input onChange={this.handleNameChange} placeholder={this.state.name}></input></p>
                    <p>Ingredients:<input onChange={this.handleIngredientsChange} placeholder={this.state.ingredients}></input></p>
                    <p>Meal:<select onChange={this.handleMealChange} value={this.state.meal}>
                            <option value='breakfast'>Breakfast</option>
                            <option value='lunch'>Lunch</option>
                            <option value='dinner'>Dinner</option>
                        </select></p>
                    <p>Origin:
                        <select onChange={this.handleOriginChange} value={this.state.origin_id}>
                    {
                        this.state.origins.map((origin, idx) => <option value={idx + 1}>{origin.origin}</option>)
                    }
                        </select>
                    </p>
                    <p>Price:<input type="number" onChange={this.handlePriceChange} placeholder={this.state.price} value={this.state.price}></input></p>
                    <p>Delicious:
                        <select onChange={this.handleSelectChange} value={this.state.delicious} selected={this.state.delicious}>
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                        </select>
                    </p>
                <button>SUBMIT</button>
                </form>
                <p>DELETE PIZZA?</p>
                <br />
                <button onClick={this.handleDelete}>DELETE</button>
            </div>
        )
    }
}
