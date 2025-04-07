'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

import Logo from "../../public/logo.svg";

const sections = ['home', 'about', 'resume', 'project'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to handle scroll and update active section
  const handleScroll = () => {
    const sectionElements = sections.map((section) =>
      document.getElementById(section)
    );

    let currentSection = 'home'; // Default section is home

    sectionElements.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll listener

    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (id) =>
    `font-medium text-[14px] md:text-base cursor-pointer transition-colors ${
      activeSection === id ? 'text-[#0D21A1]' : 'text-[#141414]'
    }`;

  const getLinkText = (id) => {
    if (id === 'about') return 'About Me';
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  return (
    <nav className="w-full bg-[#EEF0F2] px-6 py-2 shadow-sm fixed top-0 z-50">
      <div className="flex justify-between items-center">
       <Image className='w-[140px] h-[50px]' src={Logo}  alt='logo' />

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-black text-xl cursor-pointer transition"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden px-4 py-2 md:flex space-x-8">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={navLinkClass(id)}>
              {getLinkText(id)}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={navLinkClass(id)}
              onClick={() => setIsOpen(false)}
            >
              {getLinkText(id)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
