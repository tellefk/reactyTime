
import classes from "./Card.module.css"

const Cart = (props) => {
    const cartItems = <ul>{[
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        }, {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        }].map(item=><li> {item.name}</li>)}
        </ul>

    return (
        <div>
            {cartItems}
            <div>
                <span>Total amount</span>
                <span>321</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button-alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>

    )

}


export default Cart