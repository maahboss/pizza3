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
                        
                        //  console.log(this.props.indx);
                        
                        break;
    
                case ('mash') :

                        switch (this.props.indx) {
                            case(1) : 
                                
                                ingredent = (
                                    <div className={classes.mash1}></div>           
                                );
                                
                                
                            break;

                            case(2) : 
                                ingredent = (
                                    <div>
                                        <div className={classes.mash1} ></div>
                                        <div className={classes.mash2}></div> 
                                    </div>       
                                );

                            break;

                            case(3) : 
                                ingredent = (
                                    <div>
                                        <div className={classes.mash1} ></div>
                                        <div className={classes.mash2}></div> 
                                        <div className={classes.mash3}></div> 
                                    </div>       
                                );

                            break;

                            case(4) : 
                                ingredent = (
                                    <div>
                                        <div className={classes.mash1} ></div>
                                        <div className={classes.mash2}></div>
                                        <div className={classes.mash3}></div> 
                                        <div className={classes.mash4}></div> 
                                    </div>       
                                );

                            break;

                            default:
                            ingredent = null;
                    }
                    
                break;
    
                case ('tom') :

                            switch (this.props.indx) {
                                case(1) : 
                                    
                                    ingredent = (
                                        <div className={classes.tom1}></div>           
                                    );
                                    
                                    
                                break;

                                case(2) : 
                                    ingredent = (
                                        <div>
                                            <div className={classes.tom1} ></div>
                                            <div className={classes.tom2}></div> 
                                        </div>       
                                    );

                                break;

                                case(3) : 
                                    ingredent = (
                                        <div>
                                            <div className={classes.tom1} ></div>
                                            <div className={classes.tom2}></div> 
                                            <div className={classes.tom3}></div> 
                                        </div>       
                                    );

                                break;

                                case(4) : 
                                    ingredent = (
                                        <div>
                                            <div className={classes.tom1} ></div>
                                            <div className={classes.tom2}></div> 
                                            <div className={classes.tom3}></div> 
                                        </div>       
                                    );

                                break;

                                

                                default:
                                ingredent = null;
                        }
                    
                break;

                case ('bo') :

                        switch(this.props.indx) {

                            case(1) : 
                                ingredent = (
                                    <div className={classes.bo1}></div>
                                );

                            break;

                            case(2) : 
                                ingredent = (
                                <div>
                                    <div className={classes.bo1}></div>
                                    <div className={classes.bo2}></div>
                                </div>
                                );

                            break;

                            case(3) : 
                                ingredent = (
                                <div>
                                    <div className={classes.bo1}></div>
                                    <div className={classes.bo2}></div>
                                    <div className={classes.bo3}></div>
                                </div>
                                );

                            break;

                            case(4) : 
                                ingredent = (
                                <div>
                                    <div className={classes.bo1}></div>
                                    <div className={classes.bo2}></div>
                                    <div className={classes.bo3}></div>
                                </div>
                                );

                            break;

                            default:
                            ingredent = null;
                        }
                        
                    
                break;

                case ('olive') :
                        switch(this.props.indx) {

                            case(1) : 
                                ingredent = (
                                    <div className={classes.olive}></div>
                                );

                            break;

                            case(2) : 
                                ingredent = (
                                <div>
                                    <div className={classes.olive}></div>
                                    <div className={classes.olive1}></div>
                                </div>
                                );

                            break;

                            case(3) : 
                                ingredent = (
                                <div>
                                    <div className={classes.olive}></div>
                                    <div className={classes.olive1}></div>
                                    <div className={classes.olive2}></div>
                                </div>
                                );

                            break;

                            case(4) : 
                                ingredent = (
                                <div>
                                    <div className={classes.olive}></div>
                                    <div className={classes.olive1}></div>
                                    <div className={classes.olive2}></div>
                                </div>
                                );

                            break;

                            default:
                            ingredent = null;
                        }
                break;

                case ('veg') :
                            switch(this.props.indx) {

                                case(1) : 
                                    ingredent = (
                                        <div className={classes.veg}></div>
                                    );

                                break;

                                case(2) : 
                                    ingredent = (
                                    <div>
                                        <div className={classes.veg}></div>
                                        <div className={classes.veg1}></div>
                                    </div>
                                    );

                                break;

                                case(3) : 
                                    ingredent = (
                                    <div>
                                        <div className={classes.veg}></div>
                                        <div className={classes.veg1}></div>
                                        <div className={classes.veg2}></div>
                                    </div>
                                    );

                                break;

                                case(4) : 
                                    ingredent = (
                                    <div>
                                        <div className={classes.veg}></div>
                                        <div className={classes.veg1}></div>
                                        <div className={classes.veg2}></div>
                                    </div>
                                    );

                                break;

                                default:
                                ingredent = null;
                            }
                break;

                case ('shr') :
                        switch(this.props.indx) {

                            case(1) : 
                                ingredent = (
                                    <div className={classes.shr}></div>
                                );

                            break;

                            case(2) : 
                                ingredent = (
                                <div>
                                    <div className={classes.shr}></div>
                                    <div className={classes.shr1}></div>
                                </div>
                                );

                            break;

                            case(3) : 
                                ingredent = (
                                <div>
                                    <div className={classes.shr}></div>
                                    <div className={classes.shr1}></div>
                                    <div className={classes.shr2}></div>
                                </div>
                                );

                            break;

                            case(4) : 
                                ingredent = (
                                <div>
                                    <div className={classes.shr}></div>
                                    <div className={classes.shr1}></div>
                                    <div className={classes.shr2}></div>
                                </div>
                                );

                            break;

                            default:
                            ingredent = null;
                        }
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