import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"

import { useRef, useContext, useState } from "react"
import CartContext from "../../../store/cart-context.js"


const MealItemForm = (props) => {
    const [isValid, setIsValid] = useState(true)
    const amountInputRef = useRef()
    const cartCtx=useContext(CartContext)

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        setIsValid(true)
        if (enteredAmountNumber < 0 || enteredAmountNumber > 5 || enteredAmount.trim().length === 0) {
            setIsValid(false)
            return
        }

        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:enteredAmountNumber,
            price:props.price})
        console.log(cartCtx)

    }

    return (<form onSubmit={submitHandler} className={classes.form}>
        <Input label="Amount"  // Input is created with react.ForwardRef(props,ref) to make this work
            ref={amountInputRef}
            input={{
                id: "amount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
        <button>+add</button>
        {!isValid && <p>Please enter a valid amount</p>}
    </form>)
}

export default MealItemForm



