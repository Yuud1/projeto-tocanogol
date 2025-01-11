import React, { useState, useEffect, useRef } from "react";
import "../styles/header.css";
import logo from "../assets/images/logo2.png";
import palmas from "../assets/images/palmas.png";
import brasil from "../assets/images/brasil.jpg";
import hamburguer from "../assets/icons/hamburguer.png";
import basqueteIcon from "../assets/icons/variante-de-bola-de-basquete.png";
import voleiIcon from "../assets/icons/volei.png";
import tenisIcon from "../assets/icons/raquete-de-tenis.png";
import regionalIcon from "../assets/icons/pontos.png";
import internacionalIcon from "../assets/icons/marketing-global.png";
import nacionalIcon from "../assets/icons/brasil.png";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEsportesOpen, setIsEsportesOpen] = useState<boolean>(false);
  const [isFutebolOpen, setIsFutebolOpen] = useState<boolean>(false);

  // Referências para os dropdowns
  const esportesRef = useRef<HTMLDivElement>(null);
  const futebolRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEsportes = (): void => {
    setIsEsportesOpen(!isEsportesOpen);
  };

  const toggleFutebol = (): void => {
    setIsFutebolOpen(!isFutebolOpen);
  };

  // Fechar os dropdowns ao clicar fora
  const handleClickOutside = (event: MouseEvent): void => {
    if (
      esportesRef.current &&
      !esportesRef.current.contains(event.target as Node)
    ) {
      setIsEsportesOpen(false);
    }
    if (
      futebolRef.current &&
      !futebolRef.current.contains(event.target as Node)
    ) {
      setIsFutebolOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__left">
          {/* Usando Link para redirecionar para a home ao clicar na logo */}
          <Link to="/">
            <img src={logo} alt="Logo do site" className="logo" />
          </Link>
        </div>
        <div className="header__center">
          <div className="dropdown" ref={esportesRef}>
            <button className="dropdown-button" onClick={toggleEsportes}>
              Esportes <FiChevronDown size={14} />
            </button>
            <div className={`dropdown-menu ${isEsportesOpen ? "open" : ""}`}>
              <a href="#basquete">
                <img src={basqueteIcon} alt="Basquete" className="icon" /> Basquete
              </a>
              <a href="#volei">
                <img src={voleiIcon} alt="Vôlei" className="icon" /> Vôlei
              </a>
              <a href="#tenis">
                <img src={tenisIcon} alt="Tênis" className="icon" /> Tênis
              </a>
            </div>
          </div>
          <div className="dropdown" ref={futebolRef}>
            <button className="dropdown-button" onClick={toggleFutebol}>
              Futebol <FiChevronDown size={14} />
            </button>
            <div className={`dropdown-menu ${isFutebolOpen ? "open" : ""}`}>
              <a href="#internacional">
                <img src={internacionalIcon} alt="Futebol" className="icon" /> Internacional
              </a>
              <a href="#nacional">
                <img src={nacionalIcon} alt="Futebol" className="icon" /> Nacional
              </a>
              <a href="#regional">
                <img src={regionalIcon} alt="Futebol" className="icon" /> Regional
              </a>
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

      <nav className={`menu-hamburger ${isMenuOpen ? "open" : ""}`}>
        {/* Itens do menu */}
      </nav>

      {/* Menu hamburguer */}
      <nav className={`menu-hamburger ${isMenuOpen ? "open" : ""}`}>
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleEsportes}>
            Esportes <FiChevronDown size={14} />
          </button>
          <div className={`dropdown-menu ${isEsportesOpen ? "open" : ""}`}>
            <a href="#basquete">
              <img src={basqueteIcon} alt="Basquete" className="icon" /> Basquete
            </a>
            <a href="#volei">
              <img src={voleiIcon} alt="Vôlei" className="icon" /> Vôlei
            </a>
            <a href="#tenis">
              <img src={tenisIcon} alt="Tênis" className="icon" /> Tênis
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleFutebol}>
            Futebol <FiChevronDown size={14} />
          </button>
          <div className={`dropdown-menu ${isFutebolOpen ? "open" : ""}`}>
            <a href="#internacional">
              <img src={internacionalIcon} alt="Futebol" className="icon" /> Internacional
            </a>
            <a href="#nacional">
              <img src={nacionalIcon} alt="Futebol" className="icon" /> Nacional
            </a>
            <a href="#regional">
              <img src={regionalIcon} alt="Futebol" className="icon" /> Regional
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
