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
       {controls.map(ctrl => (
           <BuildControl 
                 key={ctrl.label} 
                 label={ctrl.label}
                 added={() => props.ingredentAdd(ctrl.type)} />
       ))}
    </div>
);


export default buildControls;