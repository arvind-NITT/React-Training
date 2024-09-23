import React from "react";
import { useStock } from "./Stockcontext";

export const StockListItem = ({ stock }) => {

  const {dispatch } = useStock();

  const { id, name = 'Unknown', price = 0, quantity = 0 } = stock;
  const handleBuy = () => {
    //TODO:
   dispatch({type: 'BUY_STOCK',payload:stock})
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="stock-name">{name}</div>
      <div>${price.toFixed(2)}</div>
      <button className="buy-button" onClick={handleBuy}>Buy</button>
    </li>
  );
}