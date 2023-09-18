import React, { useContext } from "react";
import "../Components/Cartitem.css";
import { Shopcontext } from "./Shopcontext";

const Cartitem = (props) => {
  const { cartitems, addToCart, removeFromCart, deletecart } =
    useContext(Shopcontext);
  const { id, name, img, discription, price, color, taxes } = props.data;
  return (
    <div className="main-morediv-cart">
      <div className="morediv-cart">
        <div className="cart-img-puma-cart">
          <img className="sub-cart-img-puma-cart" src={img} />
        </div>
        <div className="details-cart">
          <span className="head-name">{name}</span>
          <span className="head-discription">{discription}</span>
          <span className="cap-color">Color : {color}</span>
          <p className="head-price">{price}</p>
          <div className="pricebutton">
            <div className="head-button">
              <button onClick={() => removeFromCart(id)} className="-button">
                -
              </button>
              <span>{cartitems[id]}</span>
              <button onClick={() => addToCart(id)} className="-button">
                +
              </button>
            </div>
            <div className="ttamount">
              <span className="ttamountsub">Bag Total :</span>
              <span className="amount">₹{cartitems[id] * price}</span>
            </div>
          </div>
          <div className="delete-div">
            <button onClick={() => deletecart(id)} className="delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
