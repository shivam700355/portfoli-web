import { useState } from "react";
import image from "../assets/react.svg";
import Resume from "../assets/shivam_1yr_exp.pdf";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="navbar" className="z-50 fixed w-full bg-gray-950 bg-opacity-90 shadow-md">
        <nav className="flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div id="logo" className="text-white">
          Shivam Maurya
          </div>

          {/* Desktop Menu */}
          <ul id="menu" className="hidden md:flex items-center gap-6 text-white">
            <li className="nav-item">
              <a className="nav-link" href="/" id="nav-home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" id="nav-education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" id="nav-skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" id="nav-projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Resume} download id="nav-resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:smshivam700751@gmail.com?subject=Contact&body=Hello"
                id="nav-contact"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            className="text-white text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div id="mobile-menu" className="absolute top-16 left-0 w-full bg-gray-950 text-white flex flex-col items-center py-5 shadow-lg">
              <a href="/" className="py-2 hover:text-blue-400" id="mobile-nav-home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#education" className="py-2 hover:text-blue-400" id="mobile-nav-education" onClick={() => setIsOpen(false)}>Education</a>
              <a href="#skills" className="py-2 hover:text-blue-400" id="mobile-nav-skills" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" className="py-2 hover:text-blue-400" id="mobile-nav-projects" onClick={() => setIsOpen(false)}>Projects</a>
              <a href={Resume} download className="py-2 hover:text-blue-400" id="mobile-nav-resume" onClick={() => setIsOpen(false)}>Resume</a>
              <a
                href="mailto:smshivam700751@gmail.com?subject=Contact&body=Hello"
                className="py-2 hover:text-blue-400"
                id="mobile-nav-contact"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};