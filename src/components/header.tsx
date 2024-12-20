import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/images/logo2.png";
import palmas from "../assets/images/palmas.png";
import brasil from "../assets/images/brasil.jpg";
import hamburguer from "../assets/icons/hamburguer.png";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEsportesOpen, setIsEsportesOpen] = useState<boolean>(false);
  const [isFutebolOpen, setIsFutebolOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEsportes = (): void => {
    setIsEsportesOpen(!isEsportesOpen);
  };

  const toggleFutebol = (): void => {
    setIsFutebolOpen(!isFutebolOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__left">
          <img src={logo} alt="Logo do site" className="logo" />
        </div>
        <div className="header__center">
          <div className="dropdown">
            <button className="dropdown-button" onClick={toggleEsportes}>
              Esportes <FiChevronDown size={14} />
            </button>
            <div className={`dropdown-menu ${isEsportesOpen ? "open" : ""}`}>
              <a href="#basquete">Basquete</a>
              <a href="#volei">Vôlei</a>
              <a href="#tenis">Tênis</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-button" onClick={toggleFutebol}>
              Futebol <FiChevronDown size={14} />
            </button>
            <div className={`dropdown-menu ${isFutebolOpen ? "open" : ""}`}>
              <a href="#internacional">Internacional</a>
              <a href="#nacional">Nacional</a>
              <a href="#regional">Regional</a>
            </div>
          </div>
          <div className="search-bar">
            <FiSearch size={20} color="black" />
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
        <div className="header__right">
          <div className="icons-social">
            <FaFacebook size={24} color="white" />
            <FaInstagram size={24} color="white" />
            <FaTwitter size={24} color="white" />
          </div>
          <div className="icons-bandeiras">
            <img src={palmas} alt="Bandeira de Palmas" className="bandeiras" />
            <img src={brasil} alt="Bandeira do Brasil" className="bandeiras" />
          </div>
        </div>
        <img
          src={hamburguer}
          alt="Ícone de hambúrguer"
          className="hamburger-icon"
          onClick={toggleMenu}
        />
      </header>

      {/* Overlay para fechar o menu */}
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* Menu hamburguer */}
      <nav className={`menu-hamburger ${isMenuOpen ? "open" : ""}`}>
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleEsportes}>
            Esportes <FiChevronDown size={14} />
          </button>
          <div className={`dropdown-menu ${isEsportesOpen ? "open" : ""}`}>
            <a href="#basquete">Basquete</a>
            <a href="#volei">Vôlei</a>
            <a href="#tenis">Tênis</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleFutebol}>
            Futebol <FiChevronDown size={14} />
          </button>
          <div className={`dropdown-menu ${isFutebolOpen ? "open" : ""}`}>
            <a href="#internacional">Internacional</a>
            <a href="#nacional">Nacional</a>
            <a href="#regional">Regional</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
