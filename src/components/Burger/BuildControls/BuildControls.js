import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }

]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Burger Price : <strong>$ {props.totalPrice.toFixed(2)}</strong> </p>
        {
            controls.map(control => (
                <BuildControl
                    key={control.type}
                    label={control.label}
                    addIg={() => props.addIg(control.type)}
                    removeIg={() => props.removeIg(control.type)}
                    disabled={props.disabledInfo[control.type]} />
            ))
        }
        <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW </button>

    </div>
);

export default buildControls;
