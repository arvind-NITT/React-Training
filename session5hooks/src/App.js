import logo from './logo.svg';
import './App.css';

import Items from './Items';
import { HooksProvider } from './HookContext';

function App() {
  return (
    <HooksProvider>
    <div className="App">

     <Items/>
    </div>
    </HooksProvider>
  );
}

export default App;
