import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Cart from "./page/Cart";
import Product from "./page/Product";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="poppins">
      <nav>
        <NavBar />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
