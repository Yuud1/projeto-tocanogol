// src/pages/Privacidade.tsx
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";


const Privacidade: React.FC = () => {
  return (
    <>
      <Header />
      <div className="privacidade-container">
        <h1>Política de Privacidade</h1>
        <p>
          Nossa política de privacidade descreve como coletamos, usamos e
          protegemos suas informações pessoais. Ao usar nossos serviços, você
          concorda com as práticas descritas nesta política.
        </p>
        <h2>1. Informações Coletadas</h2>
        <p>
          Coletamos informações pessoais, como nome, e-mail e dados de navegação
          para melhorar a experiência do usuário.
        </p>
        <h2>2. Uso das Informações</h2>
        <p>
          Utilizamos suas informações para melhorar nossos serviços e oferecer
          conteúdo relevante.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacidade;
