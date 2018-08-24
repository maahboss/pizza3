import React from 'react';
import classes from './Pizza.css';
import PizzaIngredent from './PizzaIngredent/PizzaIngredent';



const pizza = (props) => {
        // transfer props which passed from Pizza builder from object to arry
        let trasformedIngredents = Object.keys(props.ingredents)
        .map(igKey => {
            return [...Array(props.ingredents[igKey])].map((_, i) => {
            return (  
            <PizzaIngredent key={igKey + i} type={igKey} /> );
                      
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);

        if(trasformedIngredents.length === 0) {
           trasformedIngredents = <p className={classes.empty}>Plz start adding ingredents</p>
           
        }
        
        
   return (
    <div className={classes.Pizza}>
      <div className={classes.box}>
          <div className={classes.breadBottom}>

             {trasformedIngredents}



             {/* <PizzaIngredent type="cheese" />
             <PizzaIngredent type="mash" />
             <PizzaIngredent type="tom" />
             <PizzaIngredent type="bo" />
             <PizzaIngredent type="olive" />
             <PizzaIngredent type="veg" />
             <PizzaIngredent type="shr" /> */}
          </div>
      </div>
       {/* <PizzaIngredent type="bread-bottom" />
        <PizzaIngredent type="cheese" />
       <PizzaIngredent type="mash" />
       <PizzaIngredent type="tom" />  */}
       

       

    </div>
   );
};

export default pizza;