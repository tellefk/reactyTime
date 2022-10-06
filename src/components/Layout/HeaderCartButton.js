import classes from "./HeaderCartButton.module.css"

import CartIcon from "../Cart/CartIcon"

import CartContext from "../../store/cart-context"

import { useContext, useEffect, useState } from "react"

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false)
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`

    const { items } = useContext(CartContext)
    useEffect(() => {
        if (items.length === 0) return
        setbtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setbtnIsHighlighted(false)
        }, 300)
        return () => { clearTimeout(timer) }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClickShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {items.length}
            </span>
        </button>
    )

}


export default HeaderCartButton