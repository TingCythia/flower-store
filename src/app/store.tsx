import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/cart/cartSlice"
import productReducer from "../components/products/productSlice"

/* import  checkoutReducer  from "../components/checkout/store/checkout.slice"; */


export const store = configureStore ({
    reducer: {
        cart: cartReducer,
        products: productReducer,
       /*  checkout: checkoutReducer */
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;