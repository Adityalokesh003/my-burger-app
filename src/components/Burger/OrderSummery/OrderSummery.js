import React from 'react';
import Aux from './../../hoc/Aux';
import Button from './../../UI/Button/Button';
const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}> <span style={{ textTransform: 'capitalize' }}>{igKey} </span> : {props.ingredients[igKey]}</li>
        ));

    return (
        <Aux>
            <h3>You Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Total : ${props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>

        </Aux>
    )


}



export default orderSummery;