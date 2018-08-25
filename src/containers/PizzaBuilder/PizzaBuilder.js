import React,{Component, Fragment} from 'react';

import classes from './PizzaBuilder.css';
import Pizza from '../../components/Pizza/Pizza';
import BuilControls from '../../components/Pizza/BuildControls/BuildControls';

const INGREDENT_PRICES = {
    cheese: 5.5,
    mash:2.5,
    tom:1.5,
    bo:4,
    olive:1,
    veg:3,
    shr:7
};

class PizzaBuilder extends Component {
    // constructor (props) {
    //   super(props);
    //   this.state ={...};
    // }

    state = {
        ingredents :{
            cheese:0,
            mash:0,
            tom:0,
            bo:0,
            olive:0,
            veg:0,
            shr:0
        },
        totalPrice:4,
        purchasable:false
    }

    updatePurchasable (ingredents) {
        
        const sum = Object.keys(ingredents)
                      .map(igkey => {
                          return ingredents[igkey];
                      })
                      .reduce((sum,el) => {
                          return sum + el;
                      },0);
        
        this.setState({purchasable: sum >0 });
    } 

    addIngredentHandler = (type) => {
        if(this.state.ingredents[type] < 4) {

            const oldCount = this.state.ingredents[type];
            const updatedCount = oldCount+1;
            const updateIgredents = {
                ...this.state.ingredents
            };
            updateIgredents[type] = updatedCount;
            const priceAddition = INGREDENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;
            this.setState({totalPrice: newPrice , ingredents:updateIgredents});
            this.updatePurchasable(updateIgredents);
         
        }else {window.confirm('It is Maximum level of this Ingredient')}
    }    

    removeIngredentHandler =(type) => {
          if(this.state.ingredents[type] >= 1)  {
            const oldCount = this.state.ingredents[type];
            const updatedCount = oldCount - 1;
            const updateIgredents = {
                ...this.state.ingredents
            };
            updateIgredents[type] = updatedCount;
            const priceDeduction = INGREDENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({totalPrice: newPrice , ingredents:updateIgredents});
            this.updatePurchasable(updateIgredents);

        }else{window.confirm('It is Minimum level of this Ingredient')}
    }


    render() {
        const disabledInfo ={
            ...this.state.ingredents
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {cheese:true,veg:false}
        return (
            <Fragment>
                <Pizza ingredents ={this.state.ingredents} />
                <div className={classes.Control}>
                   <BuilControls  
                       ingredentAdd = {this.addIngredentHandler}
                       ingredentRemove = {this.removeIngredentHandler}
                       disabled = {disabledInfo}
                       purchasable={this.state.purchasable}
                       price={this.state.totalPrice}  />
                </div>
                
            </Fragment>
        );
    }
}

export default PizzaBuilder;