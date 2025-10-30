import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Cart from "./page/Cart";
import Product from "./page/Product";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contacts from "./page/Contacts";
import  AuthForm from "./page/FormSign-in";
import Bestsellers from "./page/Bestsellers";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import OrderHistory from "./page/OrderHistory";
import OrderDetails from "./page/OrderDetail";



import "flowbite";

const App = () => {
  return (
    <div className="poppins">
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/authforms" element={<AuthForm />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orderhistory/:id" element={<OrderDetails />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
     
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
