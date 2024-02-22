import { useReducer, useContext, createContext } from "react";
import cartReducer from "../reducer/cartReducer";
const CartContext = createContext();

const initialState = {
    cart: [],
    totalItem: "",
    totalAmount: "",
    shippingFee: 50000,
}

const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (id, color, amount, singleProduct) =>{
        dispatch({
            type: "ADD_TO_CART",
            payload: {id, color, amount, singleProduct},
        })
    }

    return(
        <CartContext.Provider value={{...state, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () =>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext}