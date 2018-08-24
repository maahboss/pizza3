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
            cheese:5,
            mash:2,
            tom:0,
            bo:0,
            olive:0,
            veg:0,
            shr:0
        },
        totalPrice:4
    }

    addIngredentHandler = (type) => {
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
    }

    removeIngredentHandler =(type) => {

    }


    render() {
        return (
            <Fragment>
                <Pizza ingredents ={this.state.ingredents} />
                <div className={classes.Control}>
                   <BuilControls  
                       ingredentAdd = {this.addIngredentHandler}  />
                </div>
                
            </Fragment>
        );
    }
}

export default PizzaBuilder;