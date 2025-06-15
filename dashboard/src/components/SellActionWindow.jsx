import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const context = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  //   const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    console.log("Hii");
    const removeQty = Number(stockQuantity);
    axios.patch("http://localhost:3002/sellOrder", {
      name: uid,
      qty: removeQty,
    });
    context.closeSellWindow();
  };

  const handleCancelClick = () => {
    context.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              //   min={1}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          {/* <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset> */}
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
