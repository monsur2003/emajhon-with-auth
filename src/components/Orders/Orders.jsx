import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
   const savedCart = useLoaderData();
   console.log(savedCart);
   const [cart, setCart] = useState(savedCart);
   const removeCart = (id) => {
      const remaining = cart.filter((crt) => crt.id !== id);
      setCart(remaining);
      removeFromDb(id);
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
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Orders;
