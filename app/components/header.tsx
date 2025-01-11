"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center">
          <img
            src="/cib_f-secure.png"
            alt="logo"
            className="w-16 h-10 mr-3"
          />
          FASHION
        </h1>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/shop" className="hover:text-gray-600">Shop</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </nav>

        {/* Icons (Increased Size) */}
        <div className="hidden md:flex space-x-6">
          
          <Link href="/search">
            <img src="/akar-icons_search.png" alt="search" className="w-7 h-7" />
          </Link>
          <Link href="/wishlist">
            <img src="/akar-icons_heart.png" alt="wishlist" className="w-7 h-7" />
          </Link>
          <Link href="/cart">
            <img src="/ant-design_shopping-cart-outlined.png" alt="cart" className="w-7 h-7" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <img src="/hamburguer.jpg" alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <ul className="space-y-4 text-lg font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          {/* Mobile Icons */}
          <div className="flex justify-center space-x-6 mt-4">
                           <Link href="/search">  
              <img src="/akar-icons_search.png" alt="search" className="w-7 h-7" />
            </Link>
            <Link href="/wishlist">
              <img src="/akar-icons_heart.png" alt="wishlist" className="w-7 h-7" />
            </Link>
            <Link href="/cart">
              <img src="/ant-design_shopping-cart-outlined.png" alt="cart" className="w-7 h-7" />
            </Link>
          </div>
        </div>
      )}
    </header>
   
  );
};

export default Header;
