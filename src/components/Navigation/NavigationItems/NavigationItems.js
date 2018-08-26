
import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Pizza Builder</NavigationItem>
        <NavigationItem link="/" >Checkout</NavigationItem>
    </ul>
);


export default navigationitems;