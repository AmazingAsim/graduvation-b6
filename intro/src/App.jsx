import './App.css';
// import Home from './components/Home';
// import Feedback from './components/Feedback';
// import About from './components/About';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Product from './components/Product';
import UserProvider from './global/UserProvider';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  
  return (
    <UserProvider>
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='home' element={<Home />}>
            <Route path='about' element={<About />} />
            <Route path='feed' element={<Feedback />} />
            <Route path='product/:pname' element={<Product />} />
          </Route>
    

        </Routes>
      </BrowserRouter> */}
      <Login />
      <Profile />
    </div>
    </UserProvider>
  );
}

export default App;
