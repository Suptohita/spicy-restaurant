import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Main/Home';
import Pizzas from './components/Pages/Home/Menu/Pizzas';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
