import React,{Component, Fragment} from 'react';

import classes from './PizzaBuilder.css';
import Pizza from '../../components/Pizza/Pizza';
import BuilControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';



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
        purchasable:false,
        purchasing:false,
        loading:false
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

    purchaseHandler =() => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler =() => {
       // alert('You Continue!!');
       this.setState({loading:true});
       const order = {
           ingredents:this.state.ingredents,
           price:this.state.totalPrice,
           customer:{
               name:'Moh Ham',
               address:{
                   street:'Yk 205',
                   zipCode:'652245',
                   country:'USA'
               },
               email:'M@m.com'
           },
           deliveryMethod:'fastest'
       }
       axios.post('/orders.json',order)
           .then(response => {
               this.setState({loading:false,purchasing:false});
           })
           .catch(error => {
                this.setState({loading:false,purchasing:false});
            });
    }


    render() {
        const disabledInfo ={
            ...this.state.ingredents
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummary = <OrderSummary 
                                    ingredents={this.state.ingredents}
                                    price={this.state.totalPrice.toFixed(2)}
                                    purchaseCanceled={this.purchaseCancelHandler}
                                    purchaseContinued={this.purchaseContinueHandler} />
        if(this.state.loading) {
            orderSummary = <Spinner />;

        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Pizza ingredents ={this.state.ingredents} />
                <div className={classes.Control}>
                   <BuilControls  
                       ingredentAdd = {this.addIngredentHandler}
                       ingredentRemove = {this.removeIngredentHandler}
                       disabled = {disabledInfo}
                       purchasable={this.state.purchasable}
                       ordered ={this.purchaseHandler}
                       price={this.state.totalPrice}  />
                </div>
                
            </Fragment>  
        );
    }
}

export default PizzaBuilder;