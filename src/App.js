import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './css/style.css';
import "./css/login.css";
import logo from './logo.svg';
import './App.css';
import '../src/css/style.css';
import MainScreen from './mainscreen';
import Login from './login';
import Admin from './admin';
import AdminPanel from './adminPanel';
import ProtectedRoutes from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<MainScreen/>}></Route>
          <Route path='/' element={<MainScreen/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route element={<ProtectedRoutes/>}>
          <Route path='/admin' element={<AdminPanel/>}></Route>
          </Route>
          
          {/* <Route path='/login' element={<Login/>}></Route> */}
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
