import React from 'react';
import classes from './BuildControl.css'


const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.regular} onClick={props.added}>Regular</button>
        <button className={classes.extra}>Extra</button>
        <button className={classes.superextra} >Super Extra</button>
    </div>
);

export default buildControl;