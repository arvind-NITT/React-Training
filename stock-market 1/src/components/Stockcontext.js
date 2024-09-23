import React, { createContext, useReducer, useContext } from 'react';
 

const initialState = {
  stocks: [],  
  balance: 10000, 
};
 

const stockReducer = (state, action) => {
  switch (action.type) {
    case 'SELL_STOCK':
      const updatedStocks = state.stocks.map(stock => {
        if (stock.id === action.payload.id) {
          return { ...stock, quantity: stock.quantity - 1 }; 
        }
        return stock;
      }).filter(stock => stock.quantity > 0); 
 
      const stockPrice = state.stocks.find(stock => stock.id === action.payload.id).price;
      return {
        ...state,
        stocks: updatedStocks,
        balance: state.balance + stockPrice,
      };
 
    case 'BUY_STOCK':
      const existingStock = state.stocks.find(stock => stock.id === action.payload.id);
      const newStock = { ...action.payload, quantity: 1 };
 
      return {
        ...state,
        stocks: existingStock 
          ? state.stocks.map(stock => 
              stock.id === action.payload.id 
                ? { ...stock, quantity: stock.quantity + 1 } 
                : stock) 
          : [...state.stocks, newStock],
        balance: state.balance - action.payload.price, 
      };
 
    default:
      return state;
  }
};
 

const StockContext = createContext();
 

export const StockProvider = ({ children }) => {

  const [state, dispatch] = useReducer(stockReducer, initialState);
 
  return (
<StockContext.Provider value={{ state, dispatch }}>
      {children}
</StockContext.Provider>
  );
};
 

export const useStock = () => useContext(StockContext);