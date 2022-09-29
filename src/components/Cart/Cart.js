
import classes from "./Cart.module.css"

import Modal from "../UI/Modal"

const Cart = (props) => {
    const cartItems = <ul>{[
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99
        }].map(item=><li> {item.name}</li>)}
        </ul>

    return (
        <Modal>
            {cartItems}
            <div>
                <span>Total amount</span>
                <span>321</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    )

}


export default Cart