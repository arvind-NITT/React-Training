import { Navbar } from './Navbar';
import { Portfolio } from './Portfolio';
import { StockProvider } from './Stockcontext';
import { StockList } from './StockList';

function App() {
  return (
    <StockProvider>
    <div className="flex-column gap-3">
      <Navbar />
      <div className="flex-row gap-2 flex-wrap">
        <div className="flex-grow flex-basis-0" style={{"minWidth": "300px"}}>
          <StockList />
        </div>
        <div className="flex-grow flex-basis-0" style={{"minWidth": "300px"}}>
          <Portfolio />
        </div>
      </div>
    </div>
    </StockProvider>
  );
}

export default App;
