import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  PlusCircle
} from "lucide-react";
import "./NavBar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-title" onClick={() => navigate("/")}>
          <span className="title-blue">Ware</span>
          <span className="title-black">Meister</span>
        </div>
      </div>

      <div className="navbar-buttons">
        <button
          onClick={() => navigate("/admin")}
          aria-label="Admin"
          className="admin-button"
        >
          <PlusCircle className="w-6 h-6" aria-hidden="true" />
        </button>
        <button onClick={() => navigate("/search")} aria-label="Suche">
          <Search className="w-6 h-6" aria-hidden="true" />
        </button>
        <button onClick={() => navigate("/wishlist")} aria-label="Wishlist">
          <Heart className="w-6 h-6" aria-hidden="true" />
        </button>
        <button onClick={() => navigate("/account")} aria-label="Account">
          <User className="w-6 h-6" aria-hidden="true" />
        </button>
        <button onClick={() => navigate("/cart")} aria-label="Warenkorb">
          <ShoppingCart className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
