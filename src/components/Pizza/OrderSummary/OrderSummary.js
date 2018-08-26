import React,{Component,Fragment} from 'react';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentWillUpdate () {
        console.log('Order Sumary Wil Update');
        
    }

    render () {
        const ingredentSummary = Object.keys(this.props.ingredents)
          .map(igkey => {
              return ( 
              <li key={igkey}>
                  <span style={{textTransform:'capitalize'}}>{igkey}</span>: {this.props.ingredents[igkey]}
              </li>);
          });

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A great Pizza with following ingredients: </p>
                <ul>
                    {ingredentSummary}
                </ul>
                <p><strong>Total Price : {this.props.price} $</strong> : </p>
                <p>Continue To CheckOut?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>COUNTINUE</Button>
            </Fragment>
        );
    }
} 

export default OrderSummary;