import React,{Fragment} from 'react';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredentSummary = Object.keys(props.ingredents)
          .map(igkey => {
              return ( 
              <li key={igkey}>
                  <span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredents[igkey]}
              </li>);
          });
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A great Pizza with following ingredients: </p>
            <ul>
                {ingredentSummary}
            </ul>
            <p><strong>Total Price : {props.price} $</strong> : </p>
            <p>Continue To CheckOut?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled} >CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>COUNTINUE</Button>
        </Fragment>
    );
}; 


export default orderSummary;