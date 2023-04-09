import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product, removeCart, children }) => {
   const { img, name, price, quantity, id } = product;
   console.log(product);
   return (
      <div className="reviewItem-container">
         <div className="item-container">
            <img src={img} alt="" />
            <div className="item-text">
               <p className="nm">{name}</p>
               <p>
                  price: <span className="prc">${price}</span>
               </p>
               <p>
                  quantity: <span className="prc">{quantity}</span>
               </p>
            </div>

            <button
               onClick={() => {
                  removeCart(id);
               }}
               className="btn">
               <FontAwesomeIcon className="icn" icon={faTrashAlt} />
            </button>
            {children}
         </div>
      </div>
   );
};

export default ReviewItem;
