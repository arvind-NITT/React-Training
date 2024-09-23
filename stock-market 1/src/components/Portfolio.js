import React from 'react';
import { PortfolioItem } from './PortfolioItem';
import { useStock } from './Stockcontext';
 
export const Portfolio = () => {
  const { state } = useStock(); 
 
  return (
<div className="flex-column gap-1">
<h2>Portfolio</h2>
<ul className="flex-column gap-1">
        {state.stocks.length === 0 ? (
<li>No stocks in your portfolio.</li>
        ) : (
          state.stocks.map(stock => (
<PortfolioItem key={stock.id} stock={stock} />
          ))
        )}
</ul>
</div>
  );
};