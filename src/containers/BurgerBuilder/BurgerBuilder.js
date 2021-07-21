import React, { Component } from 'react';
import Aux from '../../components/hoc/Aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummery from './../../components/Burger/OrderSummery/OrderSummery';

class BurgerBuilder extends Component {
    INGREDIENT_PRICES = {
        bacon: 0.50,
        salad: 0.60,
        meat: 1.40,
        cheese: 0.80

    }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        let sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey]
            })
            .reduce((sum, ele) => sum + ele, 0);

        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const ingredients = { ...this.state.ingredients };
        ingredients[type]++;
        const priceAddition = this.INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedTotalPrice = oldPrice + priceAddition;
        this.setState({ ingredients: ingredients, totalPrice: updatedTotalPrice });
        this.updatePurchaseState(ingredients);
    }

    removeIngredientHandler = (type) => {

        if (this.state.ingredients[type] > 0) {
            const ingredients = { ...this.state.ingredients };
            ingredients[type]--;
            const priceAddition = this.INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const updatedTotalPrice = oldPrice - priceAddition;
            this.setState({ ingredients: ingredients, totalPrice: updatedTotalPrice });
            this.updatePurchaseState(ingredients);
        }
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinuedHandler = () => {
        alert("You continue!");
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummery ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinuedHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIg={this.addIngredientHandler}
                    removeIg={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;