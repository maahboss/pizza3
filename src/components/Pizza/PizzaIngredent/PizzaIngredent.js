import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaIngredent.css';


class PizzaIngredent extends Component {
    
    state ={
         mash : {
            position:'absolute',
            right: Math.random()* (80 - 10) + 10 +'%',
            top: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 30 +'px',
            height: Math.random()* (80 - 30) + 30 +'px',
            background:'rgb(170, 155, 139)',
            borderRadius: '100%',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 70% 50%, 70% 100%, 35% 100%, 35% 50%, 0 50%)',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
        },

        mash1 : {
            position:'absolute',
            right: Math.random()* (80 - 10) + 10 +'%',
            top: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 30 +'px',
            height: Math.random()* (80 - 30) + 30 +'px',
            background:'rgb(170, 155, 139)',
            borderRadius: '100%',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 70% 50%, 70% 100%, 35% 100%, 35% 50%, 0 50%)',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
        },

        mash2 : {
            position:'absolute',
            right: Math.random()* (80 - 10) + 10 +'%',
            top: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 30 +'px',
            height: Math.random()* (80 - 30) + 30 +'px',
            background:'rgb(170, 155, 139)',
            borderRadius: '100%',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 70% 50%, 70% 100%, 35% 100%, 35% 50%, 0 50%)',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
        },

        mash3 : {
            position:'absolute',
            right: Math.random()* (80 - 10) + 10 +'%',
            top: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 30 +'px',
            height: Math.random()* (80 - 30) + 30 +'px',
            background:'rgb(170, 155, 139)',
            borderRadius: '100%',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 70% 50%, 70% 100%, 35% 100%, 35% 50%, 0 50%)',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
        },

        tom : {
            position: 'absolute',
            width: Math.random()* (15 - 10) +10 +'%',
            height: Math.random()* (15 - 10) +10 +'%',
            backgroundColor:'red',
            borderRadius:'50% 50% 50% 50%',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%',
            transform: 'rotate(50deg)',
            boxShadow: 'inset 1px -2px rgb(247, 107, 107)',
        },

        tom1 : {
            position: 'absolute',
            width: Math.random()* (15 - 10) +10 +'%',
            height: Math.random()* (15 - 10) +10 +'%',
            backgroundColor:'red',
            borderRadius:'50% 50% 50% 50%',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%',
            transform: 'rotate(50deg)',
            boxShadow: 'inset 1px -2px rgb(247, 107, 107)',
        },

        tom2 : {
            position: 'absolute',
            width: Math.random()* (15 - 10) +10 +'%',
            height: Math.random()* (15 - 10) +10 +'%',
            backgroundColor:'red',
            borderRadius:'50% 50% 50% 50%',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%',
            transform: 'rotate(50deg)',
            boxShadow: 'inset 1px -2px rgb(247, 107, 107)',
        },

        tom3 : {
            position: 'absolute',
            width: Math.random()* (15 - 10) +10 +'%',
            height: Math.random()* (15 - 10) +10 +'%',
            backgroundColor:'red',
            borderRadius:'50% 50% 50% 50%',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%',
            transform: 'rotate(50deg)',
            boxShadow: 'inset 1px -2px rgb(247, 107, 107)',
        },

        bo : {
            position: 'absolute',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%', 
            width: '60px',
            height: '60px',
            borderRadius: '100%',
            background: 'rgba(223, 88, 76, 1)',
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(223, 88, 76, 1), rgba(0, 0, 0, .1) 9%)'
        },

        bo1 : {
            position: 'absolute',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%', 
            width: '60px',
            height: '60px',
            borderRadius: '100%',
            background: 'rgba(223, 88, 76, 1)',
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(223, 88, 76, 1), rgba(0, 0, 0, .1) 9%)'
        },

        bo2 : {
            position: 'absolute',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%', 
            width: '60px',
            height: '60px',
            borderRadius: '100%',
            background: 'rgba(223, 88, 76, 1)',
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(223, 88, 76, 1), rgba(0, 0, 0, .1) 9%)'
        },

        bo3 : {
            position: 'absolute',
            right: Math.random()* (70 - 20) +20 +'%',
            top:Math.random()* (70 - 20) +20 +'%', 
            width: '60px',
            height: '60px',
            borderRadius: '100%',
            background: 'rgba(223, 88, 76, 1)',
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(223, 88, 76, 1), rgba(0, 0, 0, .1) 9%)'
        },

        olive : {
            position: 'absolute',
            top: Math.random()* (80 - 10) + 10 +'%',
            left: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (17 - 10) + 10 +'px',
            height: Math.random()* (17 - 10) + 10 +'px',
            border: '5px solid #222',
            borderRadius: '100%'
            
            },
        
        olive1 : {
            position: 'absolute',
            top: Math.random()* (80 - 10) + 10 +'%',
            left: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (17 - 10) + 10 +'px',
            height: Math.random()* (17 - 10) + 10 +'px',
            border: '5px solid #222',
            borderRadius: '100%'
            
            },
        
        olive2 : {
            position: 'absolute',
            top: Math.random()* (80 - 10) + 10 +'%',
            left: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (17 - 10) + 10 +'px',
            height: Math.random()* (17 - 10) + 10 +'px',
            border: '5px solid #222',
            borderRadius: '100%'
            
            },

        olive3 : {
            position: 'absolute',
            top: Math.random()* (80 - 10) + 10 +'%',
            left: Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (17 - 10) + 10 +'px',
            height: Math.random()* (17 - 10) + 10 +'px',
            border: '5px solid #222',
            borderRadius: '100%'
            
            },

        veg : {
            position: 'absolute',
            width: '2%',
            height: '15%',
            backgroundColor: 'green',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            borderRadius: '40%',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)',
            boxShadow: 'inset -2px -3px #c9c9c9'
        },

        veg1 : {
            position: 'absolute',
            width: '2%',
            height: '15%',
            backgroundColor: 'green',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            borderRadius: '40%',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)',
            boxShadow: 'inset -2px -3px #c9c9c9'
            
        },

        veg2 : {
            position: 'absolute',
            width: '2%',
            height: '15%',
            backgroundColor: 'green',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            borderRadius: '40%',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)',
            boxShadow: 'inset -2px -3px #c9c9c9'
        },

        veg3 : {
            position: 'absolute',
            width: '2%',
            height: '15%',
            backgroundColor: 'green',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            borderRadius: '40%',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)',
            boxShadow: 'inset -2px -3px #c9c9c9'
        },

        shr : {
            position: 'absolute',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 10 + 'px',
            height: Math.random()* (80 - 10) + 10 + 'px',
            borderRadius: '50% 15%',
            boxShadow: '25px 15px 0 0 pink',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
            },
        
        shr1 : {
            position: 'absolute',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 10 + 'px',
            height: Math.random()* (80 - 10) + 10 + 'px',
            borderRadius: '50% 15%',
            boxShadow: '25px 15px 0 0 pink',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
            },
        
        shr2 : {
            position: 'absolute',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 10 + 'px',
            height: Math.random()* (80 - 10) + 10 + 'px',
            borderRadius: '50% 15%',
            boxShadow: '25px 15px 0 0 pink',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
            },

        shr3 : {
            position: 'absolute',
            left:Math.random()* (80 - 10) + 10 +'%',
            top:Math.random()* (80 - 10) + 10 +'%',
            width: Math.random()* (80 - 30) + 10 + 'px',
            height: Math.random()* (80 - 10) + 10 + 'px',
            borderRadius: '50% 15%',
            boxShadow: '25px 15px 0 0 pink',
            transform: 'rotate(-'+ Math.random()*100 + 'deg)'
            }

    
        
    
    }



  //  width: Math.random()*100 +'%',
    render () {
        let ingredent = null; 
        
        
        
        switch (this.props.type) {
            
            
            
               case ('cheese') :
               
                  
                    ingredent = (
                             <div className={classes.cheese}></div>   
                            //<div style={ch}></div>
                            
                        );
                        
                        //  console.log(this.props.indx);
                        
                        break;
    
                case ('mash') :

                        ingredent = (
                          <div>
                            <div style={this.state.mash}></div>          
                            <div style={this.state.mash1}></div>                    
                            <div style={this.state.mash2}></div>                    
                            <div style={this.state.mash3}></div>                    
                          </div> 
                          
                          
                        );
                    
                break;
    
                case ('tom') :
                      
                        ingredent = (
                          <div>
                            <div style={this.state.tom}></div>
                            <div style={this.state.tom1}></div>
                            <div style={this.state.tom2}></div>
                            <div style={this.state.tom3}></div>
                          </div>          
                        );
 
                break;

                case ('bo') :

                    ingredent = (
                      <div>
                        <div style={this.state.bo}></div>
                        <div style={this.state.bo1}></div>
                        <div style={this.state.bo2}></div>
                        <div style={this.state.bo3}></div>
                      </div>
                    );
                        
                    
                break;

                case ('olive') :

                        ingredent = (
                          <div>
                            <div style={this.state.olive}></div>
                            <div style={this.state.olive1}></div>
                            <div style={this.state.olive2}></div>
                            <div style={this.state.olive3}></div>
                          </div>
                        );
                        
                break;

                case ('veg') :
                      
                        ingredent = (
                          <div>
                            <div style={this.state.veg}></div>
                            <div style={this.state.veg1}></div>
                            <div style={this.state.veg2}></div>
                            <div style={this.state.veg3}></div>
                          </div>
                        );
                            
                break;

                case ('shr') :

                    ingredent = (
                      <div>
                        <div style={this.state.shr}></div>
                        <div style={this.state.shr1}></div>
                        <div style={this.state.shr2}></div>
                        <div style={this.state.shr3}></div>
                      </div>
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