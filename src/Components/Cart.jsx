import React, { useContext } from "react";
import "../Components/Cart.css";
import { Shopcontext } from "./Shopcontext";
import PRODUCTS from "./Data";
import Cartitem from "../Components/Cartitem.jsx";
import emptycart from "./Images/empty-cart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartitems, addToCart, gettottalcarteamount } =
    useContext(Shopcontext);
  let totalamount = gettottalcarteamount();
  return (
    <div className="main-Cart">
      {PRODUCTS.map((product) => {
        if (cartitems[product.id] !== 0) {
          return <Cartitem data={product}></Cartitem>;
        }
      })}

      {totalamount > 0 ? (
        <div className="tottal-ttlamount">
          <span className="full-tottal-amount">
            Total Amount : ₹{totalamount}

          </span>
          <Link to='/Login'><button className="checkout">Checkout</button></Link>
        </div>
      ) : (
        <div className="emptyimg-div">
          <img className="emptyimg" src={emptycart} />
          <span className="cart-empty">cart empty</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
