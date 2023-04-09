import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
   const savedCart = useLoaderData();
   console.log(savedCart);
   const [cart, setCart] = useState(savedCart);
   const removeCart = (id) => {
      const remaining = cart.filter((crt) => crt.id !== id);
      setCart(remaining);
      removeFromDb(id);
   };

   const handleClearCart = () => {
      setCart([]);
      deleteShoppingCart();
   };

   return (
      <div className="shop-container">
         <div className="review-container">
            {cart.map((product) => (
               <ReviewItem
                  key={product.id}
                  product={product}
                  removeCart={removeCart}></ReviewItem>
            ))}
         </div>
         <div className="cart-container crt">
            <Cart cart={cart} handleClearCart={handleClearCart}>
               <Link to="/checkout" className="proceed-link">
                  <button className="btn-proceed">Proceed Checkout</button>
               </Link>
            </Cart>
         </div>
      </div>
   );
};

export default Orders;
