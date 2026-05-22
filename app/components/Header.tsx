"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center" style={{backgroundColor: '#C8c7cc'}}>
      <div className="w-full max-w-[1280px] flex justify-between items-center px-4 md:px-20 h-16">
        
        {/* Brand Logo */}
        <div className="font-headline-md text-headline-md font-bold text-black ">
          <Link href="/">ANKIT SPORTS</Link>
        </div>

        {/* Desktop Navigation (Hidden on mobile) */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="font-label-lg text-label-lg text-black border-b-2 border-black pb-1 duration-200 ease-in-out"
            href="/jersey"
          >
            Jerseys
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black hover:opacity-80 transition-opacity duration-200 ease-in-out"
            href="/shorts"
          >
            Shorts
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black hover:opacity-80 transition-opacity duration-200 ease-in-out"
            href="/balls"
          >
            Balls
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black hover:opacity-80 transition-opacity duration-200 ease-in-out"
            href="/shoes"
          >
            Shoes
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black hover:opacity-80 transition-opacity duration-200 ease-in-out"
            href="/trophies"
          >
            Trophies
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="hover:opacity-80 transition-opacity duration-200 ease-in-out text-black">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="hover:opacity-80 transition-opacity duration-200 ease-in-out text-black">
            <span className="material-symbols-outlined">person</span>
          </button>

          {/* Hamburger Menu Toggle Button (Visible only on mobile) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center hover:opacity-80 transition-opacity duration-200 ease-in-out text-black"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <nav className="w-full style={{backgroundColor: '#C8c7cc'}} md:hidden  border-t border-outline-variant dark:border-outline shadow-md flex flex-col px-6 py-4 gap-4 transition-all duration-300 ease-in-out">
          <a
            className="font-label-lg text-label-lg text-black border-b-2 border-black pb-1 w-max"
            href="/jersey"
            onClick={() => setIsOpen(false)}
          >
            Jerseys
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black py-1 duration-200 ease-in-out"
            href="/shorts"
            onClick={() => setIsOpen(false)}
          >
            Shorts
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black py-1 duration-200 ease-in-out"
            href="/balls"
            onClick={() => setIsOpen(false)}
          >
            Balls
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black py-1 duration-200 ease-in-out"
            href="/shoes"
            onClick={() => setIsOpen(false)}
          >
            Shoes
          </a>
          <a
            className="font-label-lg text-label-lg text-black hover:text-black py-1 duration-200 ease-in-out"
            href="/trophies"
            onClick={() => setIsOpen(false)}
          >
            Trophies
          </a>
        </nav>
      )}
    </header>
  );
}