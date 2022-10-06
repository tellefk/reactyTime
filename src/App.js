import { useState} from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import CartProvider from "./store/CartProvider"


function App() {
  const [cartisShown,setCartisShown] =useState(false)

  const showCartHandler=()=>{
    setCartisShown(true)
  }
  const HideCartHandler=()=>{
    setCartisShown(false)
  }

  return (
    <CartProvider>
      {cartisShown && <Cart hideModal={HideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>)
}

export default App;
