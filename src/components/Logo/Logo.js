import React from 'react';
import pizzaLogo from '../../assets/Images/Logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={pizzaLogo} alt="MyPizza" />
    </div>
);


export default logo;