import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Main/Home';
import Login from './components/Pages/Login/Login';
import ExpandMenu from './components/Pages/Menu/ExpandMenu'
import Register from './components/Pages/Register/Register';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/menu' element={<ExpandMenu/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
