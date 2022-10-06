
import CartContext from "./cart-context"

import { useReducer } from "react"

const defaultCartState = {
    items: [],
    totalAmount: 0

}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalamount = state.totalAmount + action.item.amount * action.item.price
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItem;
        let updatedItems;
        if (existingCartItem) {
            updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItem = { ...action.item }
            updatedItems = state.items.concat(updatedItem)

        }

        // const updatedItems=state.items.concat(action.item)
        return {
            items: updatedItems,
            totalAmount: updatedTotalamount
        }
    } else if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;
        let updatedItem;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            updatedItem = { ...existingCartItem, amount: existingCartItem.amount-1 }
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex] = updatedItem

        }
        const updatedTotalamount = state.totalAmount - existingCartItem.price
        return {
            items: updatedItems,
            totalAmount: updatedTotalamount
        }
    }
    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = item => {
        dispatchCartAction({ type: "ADD", item: item })
    }
    const removeItemHandler = id => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}


export default CartProvider