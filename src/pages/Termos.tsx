// src/pages/Termos.tsx
import React from "react";
import Header from "../components/header"; // Importando o Header
import Footer from "../components/footer"; // Importando o Footer

const Termos: React.FC = () => {
  return (
    <>
      <Header />
      <div className="termos-container">
        <h1>Termos de Uso</h1>
        <p>
          Estes termos de uso regem a utilização do nosso site e serviços.
          Ao acessar nosso site, você concorda com todos os termos e condições
          descritos abaixo.
        </p>
        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao utilizar o site, você concorda em cumprir os termos estabelecidos.
        </p>
        <h2>2. Limitação de Responsabilidade</h2>
        <p>
          Não nos responsabilizamos por quaisquer danos diretos ou indiretos
          decorrentes do uso dos nossos serviços.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Termos;
