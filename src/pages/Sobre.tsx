// src/pages/Sobre.tsx
import React from "react";
import Header from "../components/header"; // Importando o Header
import Footer from "../components/footer"; // Importando o Footer

const Sobre: React.FC = () => {
  return (
    <>
      <Header />
      <div className="sobre-container">
        <h1>Sobre Nós</h1>
        <p>
          Somos uma empresa dedicada a oferecer as melhores informações e
          serviços aos nossos usuários. Nossa missão é garantir a satisfação de
          todos os nossos visitantes e clientes.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
