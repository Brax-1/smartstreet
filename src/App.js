import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import { Navbar } from './component/Navbar/Navbar';
import { Detail } from './pages/detail';
import { Route, Routes, useLocation } from "react-router-dom";
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import { Profile } from './pages/profile';
import { Product } from './pages/product';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/*" element={<HandleUnkownDirectory />} /> */}
        <Route
          path="/"
          element={<Home/>}
        />
        <Route path="/list/*" element={<Product/>} />
        <Route
          path="/details/:id"
          element={<Detail/>}
        />
        <Route
          path="/profile"
          element={<Profile/>}
        />
      </Routes>
    </div>
  );
}

export default App;
