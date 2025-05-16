
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
