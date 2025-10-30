import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { FaCartShopping } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import Home from "@/page/Home";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Navbar scroll state
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  // Dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // null = not signed in

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Sign out handler
  const handleSignOut = () => {
    setUser(null); // remove user session
    setDropdownOpen(false);
  };

  return (
    <nav
      id="NavBar"
      className={`bg-blue-200 dark:bg-gray-800 fixed w-full top-0 transition-top duration-300 z-50`}
      style={{ top: showNav ? "0" : "-60px" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img
            src="logobookstore.jpg"
            alt="Logobookstore"
            className="rounded-full w-10 h-10 object-cover"
          />
          <h1 className="hidden md:block font-bold text-2xl">MyBookshop</h1>
        </div>

        {/* Links */}
        <div className="hidden lg:flex gap-6 text-lg font-semibold">
          <Link to="/" className="rounded-s-lg hover:text-white">
            Home
          </Link>
          <Link to="/about" className="rounded-s-lg hover:text-white">
            About
          </Link>
          <Link to="/product" className="rounded-s-lg hover:text-white">
            Product
          </Link>
          <Link to="/contacts" className="rounded-s-lg hover:text-white">
            Contact Us
          </Link>
        </div>

        {/* Right side */}
        <div className="flex gap-4 items-center relative ">
          <Input placeholder="Enter" className="bg-white" />

          {/* Profile Dropdown */}
          <div className="relative">
            <img
              src={user ? user.photoURL || "profile.jpg" : "profile.jpg"}
              alt="Profile"
              className="hidden lg:block rounded-full w-10 h-10 object-cover cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                {user ? (
                  <>
                    <div className="px-4 py-2 text-gray-800 dark:text-gray-200">
                      {user.name || "User"}
                    </div>
                    <hr className="border-gray-200 dark:border-gray-600" />
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                      onClick={handleSignOut}
                    >
                      
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/SignIn"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/SignUp"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            className="hidden lg:block cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>

          {/* Cart */}
          <Link to="/cart" className="hidden lg:block">
            <FaCartShopping size={24} />
          </Link>

          {/* Sidebar */}
          <SideBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
