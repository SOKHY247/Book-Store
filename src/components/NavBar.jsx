import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { FaCartShopping } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const NavBar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        <div className="flex gap-2 items-center">
          <img
            src="brand.png"
            alt="Logo"
            className="rounded-full w-10 h-10 object-cover"
          />
          <h1 className="hidden md:block font-bold text-2xl">StyleHub</h1>
        </div>

        <div className="hidden lg:flex gap-6 text-lg font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Input placeholder="Enter" className="bg-white" />
          <img
            src="profile.jpg"
            alt="Profile"
            className="hidden lg:block rounded-full w-10 h-10 object-cover"
          />
          <button className="hidden lg:block cursor-pointer" onClick={toggleTheme}>
            {theme == "dark" ? <Sun /> : <Moon />}
          </button>
          <Link to="/cart" className="hidden lg:block">
            <FaCartShopping size={24} />
          </Link>
          <SideBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
