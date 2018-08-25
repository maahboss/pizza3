import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';




const controls = [
  { label:'Cheese' , type:'cheese'},
  { label:'Mashroom' , type:'mash'},
  { label:'Tomato' , type:'tom'},
  { label:'Salami' , type:'bo'},
  { label:'Olive' , type:'olive'},
  { label:'Vegetable' , type:'veg'},
  { label:'Shripm' , type:'shr'},

];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong className={classes.stron}> {props.price.toFixed(2)} $</strong> </p>
       {controls.map(ctrl => (
           <BuildControl 
                 key={ctrl.label} 
                 label={ctrl.label}
                 added={() => props.ingredentAdd(ctrl.type)}
                 removed={() => props.ingredentRemove(ctrl.type)}
                 disabled={props.disabled[ctrl.type]} />
       ))}
        
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered} >ORDER NOW</button>

    </div>
);


export default buildControls;