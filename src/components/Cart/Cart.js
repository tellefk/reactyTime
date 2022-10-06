
import classes from "./Cart.module.css"

import Modal from "../UI/Modal"

import CartContext from "../../store/cart-context"

import { useContext } from "react"
import CartItem from "./CartItem"
const Cart = (props) => {
    const cartCtx=useContext(CartContext)

    // const cartItems = <ul>{[
    //     {
    //         id: 'm3',
    //         name: 'Barbecue Burger',
    //         description: 'American, raw, meaty',
    //         price: 12.99
    //     }].map(item => <li> {item.name}</li>)}
    // </ul>

    const removeItem=(e)=>{
        e.preventDefault()

    }


    const addItem=(e)=>{
        e.preventDefault()
    }


    // const cartItems = <ul>{cartCtx.items.map(item => <li> {item.amount} {item.name}</li>)}
    // </ul>
    const cartItems = <ul>{cartCtx.items.map(item => <li> <CartItem 
    amount={item.amount} 
    name={item.name} 
    price={item.price}
    ></CartItem></li>)}
    </ul>
    


    const test = () => {
        console.log("Ording order food")
    }
    return (
        <Modal hideModal={props.hideModal}>
            {cartItems}
            <div>
                <span>Total amount </span>
                <span>${Math.round(cartCtx.totalAmount,2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.hideModal}>Close</button>
                <button className={classes.button} onClick={test}>Order</button>
            </div>
        </Modal>

    )

}


export default Cart