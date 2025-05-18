
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Donate from './pages/Donate';
import Feedback from './pages/Feedback';
import Home from './pages/Home';
import Eligibility from './pages/Eligibility';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="donate" element={<Donate />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="eligibility" element={<Eligibility />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
