import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css'
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey} />
            })
        })
        .reduce((arr, ele) => (
            arr.concat(ele) //an array of Burger JSX elements
        ), [])

    if (transformedIngredients.length === 0) transformedIngredients = <p>Please start adding ingredients</p>


    return (< div className={classes.Burger} >
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div >)
};

export default burger;