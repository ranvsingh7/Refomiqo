import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Sidebar />
      <SearchBar />
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
