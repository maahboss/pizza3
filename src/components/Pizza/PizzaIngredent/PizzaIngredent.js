import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaIngredent.css';


class PizzaIngredent extends Component {
    render () {
        let ingredent = null;
        
        
        
        switch (this.props.type) {
            
            
            
               case ('cheese') :
                ingredent = (
                    <div className={classes.cheese}></div>   
                       
                );
                
                
                
                
                break;
    
                case ('mash') :
                    ingredent = (
                            <div className={classes.mash1}></div>           
                    );
                break;
    
                case ('tom') :
                    ingredent = (
                            <div className={classes.tom1}></div>
                    );
                break;

                case ('bo') :
                    ingredent = (
                            <div className={classes.bo1}></div>
                    );
                break;

                case ('olive') :
                    ingredent = (
                            <div className={classes.olive}></div>
                    );
                break;

                case ('veg') :
                    ingredent = (
                            <div className={classes.veg}></div>
                    );
                break;

                case ('shr') :
                    ingredent = ( 
                            <div className={classes.shr}></div>
                    );
                break;
    
                default:
                  ingredent = null;
            
        }
        return ingredent;
    }

} 


PizzaIngredent.propTypes = {
    type:PropTypes.string.isRequired
};



export default PizzaIngredent;