import React from 'react';
import pizzaLogo from '../../assets/Images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={pizzaLogo} alt="MyPizza" />
    </div>
);


export default logo;