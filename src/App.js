import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Reset from "./Pages/auth/reset";
function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Contact" element={<Contact/>} />
             <Route path="/Login" element={<Login/>} />
             <Route path="/Reset" element={<Reset/>} />
             <Route path="/Register" element={<Register/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
