import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removeIg} disabled={props.disabled}>-</button>
        <button className={classes.More} onClick={props.addIg}>+</button>
    </div>
);

export default buildControl;