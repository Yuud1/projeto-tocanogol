import React from "react";
import noticia1 from "../assets/images/propaganda1.jpg";
import "../styles/advertisingMain.css";

const advertisingMain = () => {
  const advertisingData = [
    {
      id: 1,
      title: "Oferta imperdível do TiggoSX",
      imageUrl: noticia1,
      newsLink: "https://exemplo.com/propaganda1.jpg",
      empresa: 'Nisa CAOA Chery',
      description: "o SUV que é a combinação perfeita entre a tecnologia de última geração e o maior conforto",
    },
  ];

  return (
    <div className="container-advertising">
      {advertisingData.map((advertisement) => (
        <div className="advertising-item" key={advertisement.id}>
          {/* Container de Imagem */}
          <div className="image-container">
            <img
              src={advertisement.imageUrl}
              alt={advertisement.title}
              className="advertising-image"
            />
          </div>

          {/* Container de Informações */}
          <div className="info-container">
            <h2>{advertisement.title}</h2>
            <p>{advertisement.description}</p>
            <div className="divider-line"></div>
            <div className="redirecionamento">
              <h3>{advertisement.empresa}</h3>
              <a href={advertisement.newsLink} target="_blank" rel="noopener noreferrer">
              Saiba Mais &gt;
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default advertisingMain;
