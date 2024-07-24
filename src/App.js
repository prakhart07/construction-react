import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../src/css/style.css';
import MainScreen from './mainscreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<MainScreen/>}></Route>
          <Route path='/' element={<MainScreen/>}></Route>
          {/* <Route path='/login' element={<Login/>}></Route> */}
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
