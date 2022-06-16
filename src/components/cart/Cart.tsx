import React from "react";
import classNames from "classnames";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getTotalPrice, removeFromCart, updateQuantity } from "./cartSlice";
import styles from "./Cart.module.css";
/* import { Checkout } from "../checkout/checkout"; */
import { Link } from "react-router-dom";

export function Cart() {
  
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((getTotalPrice) );
  const checkoutState = useAppSelector((state )=> state.cart.checkoutState)

  function onQuantityChanged(e: React.FocusEvent<HTMLInputElement>, id:string){
         const quantity = Number(e.target.value) || 0;
         dispatch(updateQuantity({id, quantity}))
  }

  function onCheckout(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
   
}
  

  const tableClasses = classNames({
    [styles.table]: true,
    [styles.checkoutErr0r]: checkoutState === "ERROR",
    [styles.checkoutLoading]: checkoutState === "LOADING",
   });

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={tableClasses}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
  <tbody>
  {Object.entries(items).map(([id, quantity]) => (
    <tr key={id}>
      <td><img style= {{width:120}} src={products[id].imageURL}></img></td>
      <td>{products[id].name}</td>
      <td>
        <input
          type="text"
          className={styles.input}
          defaultValue={quantity}
          onBlur={(e)=>onQuantityChanged(e, id)}
        />
      </td>
      <td>{products[id].price} kr</td>
      <td>
        <button
          aria-label={`Remove ${products[id].name}} from Shopping Cart`}
          onClick={()=> dispatch(removeFromCart(id))}
        >
          X
        </button>
      </td>
    </tr>
  ))}
</tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>{totalPrice} kr</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <Link to='/app-routes'>
        <button  className={styles.button} type="submit">
          Checkout
        </button>
      </Link>
    </main>
  );
}
