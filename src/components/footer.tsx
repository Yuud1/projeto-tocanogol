
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <h2>Sobre Nós</h2>
          <p>
            Somos dedicados a oferecer as melhores informações e serviços aos
            nossos usuários. Sua satisfação é nossa prioridade!
          </p>
        </div>
        <div className="footer__links">
          <h2>Links Úteis</h2>
          <ul>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/termos">Termos de Uso</Link>
            </li>
            <li>
              <Link to="/privacidade">Política de Privacidade</Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h2>Redes Sociais</h2>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 TocanoGol. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
