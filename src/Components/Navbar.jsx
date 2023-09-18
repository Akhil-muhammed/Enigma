import React, { useContext } from "react";
import "../Components/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import shopcard from "./Images/shopcard.png";
import search from "./Images/searchIcon.png";
import { Shopcontext } from "./Shopcontext";

function Navbar() {
  const { cartitems } = useContext(Shopcontext);
  const itemCount = Object.values(cartitems).reduce(
    (acc, quantity) => acc + quantity,
    0
  );
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="nav1">
            <Link className="logo" to="/">
              <img
                height="60px"
                width="70px"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3yvAPb3jys0tMVwh0v6K0MMjKmA4RAYPXZp34uhwmhs7t_2dw"
              />
            </Link>
          </div>
          <div className="nav2">
            <div className="nav3">
              <Link className="Categories" to={"/"}>
                Home
              </Link>
              <Link className="Brands" to={"Product"}>
                Brands
              </Link>
            </div>
            <Link className="link">
              <div className="input">
                <img className="searchicon" src={search} />
                <input
                  className="search"
                  type="text"
                  placeholder="  Search for Products"
                />
              </div>
            </Link>
            <div className="navlike">
              <img src="https://icongr.am/entypo/heart-outlined.svg?size=25&color=ffffff" />

              <Link className="Cart" to="Cart">
                <img className="shopcard" src={shopcard} />
                {itemCount > 0 && (
                  <span
                    style={{
                      color: "red",
                      minWidth: "19px",
                      minHeight: "19px",
                      backgroundColor: "white",
                      borderRadius: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "9px",
                      fontWeight: "800",
                      position: "absolute",
                      marginLeft: "23px",
                      marginBottom: "11px",
                    }}
                  >
                    {" "}
                    <>{itemCount}</>
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
