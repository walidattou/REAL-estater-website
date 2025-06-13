"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./Nav.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setIsOpen(false)

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo - Now using NavLink */}
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span>
            LUXE<span className="gold-text">ESTATE</span>
          </span>
        </NavLink>

        {/* Desktop Menu - Using NavLink */}
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMobileMenu}
          >
            Properties
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="cta-button-container">
          <NavLink to="/contact" className="cta-button" onClick={closeMobileMenu}>
            Schedule Viewing
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu - Using NavLink */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
          onClick={closeMobileMenu}
        >
          Properties
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
          onClick={closeMobileMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
          onClick={closeMobileMenu}
        >
          Contact
        </NavLink>

        {/* Mobile CTA Button */}
        <NavLink to="/contact" className="mobile-cta-button" onClick={closeMobileMenu}>
          Schedule Viewing
        </NavLink>
      </div>
    </nav>
  )
}
