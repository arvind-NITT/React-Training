import { useStock } from "./Stockcontext";

export const Navbar = () => {
  const { state  }= useStock();
  return (
    <nav className="flex-row flex-space-between">
      <h1 style={{ fontWeight: 'bold' }}>Stock Market</h1>
      <h1>Balance: ${state.balance.toFixed(2)}</h1>
    </nav>
  );
};
