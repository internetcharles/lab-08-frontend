import React, { Component } from 'react'
import { fetchPizza } from './pizza-api.js'

export default class DetailPage extends Component {

    state = {
        pizza: {}
    }

    componentDidMount = async() => {
        const data = await fetchPizza(this.props.match.params.id)

        this.setState({
            pizza: data.body
        })
    }

    render() {
        return (
            <div>
                <p>This pizza is called the {this.state.pizza.name}.</p>
                <p>It's made of {this.state.pizza.ingredients}.</p>
                <p>It costs ${this.state.pizza.price}.</p>
                <p>It's meant for {this.state.pizza.meal}</p>
                { this.state.pizza.delicious ? <p>It's delicious</p> : <p>It's disgusting!</p> }
            </div>
        )
    }
}
