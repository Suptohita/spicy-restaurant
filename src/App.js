import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';

import Home from './components/Pages/Home/Main/Home';
import Login from './components/Pages/Login/Login';
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
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
