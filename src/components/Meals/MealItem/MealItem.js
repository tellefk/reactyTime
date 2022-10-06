import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

import { useRef } from "react"


const MealItem = (props) => {
    const price_ = `$${props.price}`
    const amoutEntered = useRef()

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price_}</div>
            </div>
            <div>
                <MealItemForm ref={amoutEntered} id={props.id} name={props.name} price={props.price} />
            </div>
        </li>)
}

export default MealItem