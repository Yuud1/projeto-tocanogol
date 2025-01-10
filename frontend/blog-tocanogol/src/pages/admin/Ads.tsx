// src/pages/Ads.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ads.css";

interface Ad {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

const Ads: React.FC = () => {
  const navigate = useNavigate();
  const ads: Ad[] = [
    {
      id: 1,
      title: "Promoção de Verão",
      description: "Aproveite descontos incríveis nesta temporada.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Lançamento de Produto",
      description: "Conheça nosso mais novo produto agora mesmo.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Ofertas Relâmpago",
      description: "Descontos válidos por tempo limitado.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleCreateAd = () => {
    navigate("/create-ad");
  };

  return (
    <div className="ads-page">
      <h1>Gerenciamento de Propagandas</h1>

      <div className="ads-container">
        <div className="ads-sidebar">
          <h2>Laterais</h2>
          {ads.map(
            (ad, index) =>
              index % 2 === 0 && (
                <div key={ad.id} className="ad-item">
                  <h3>{ad.title}</h3>
                  <p>{ad.description}</p>
                  {ad.image && <img src={ad.image} alt={ad.title} />}
                </div>
              )
          )}
        </div>

        <div className="ads-main">
          <h2>Principais</h2>
          {ads.map(
            (ad, index) =>
              index % 2 !== 0 && (
                <div key={ad.id} className="ad-item">
                  <h3>{ad.title}</h3>
                  <p>{ad.description}</p>
                  {ad.image && <img src={ad.image} alt={ad.title} />}
                </div>
              )
          )}
        </div>
      </div>

      <button className="create-ad-button" onClick={handleCreateAd}>
        Criar Nova Propaganda
      </button>
    </div>
  );
};

export default Ads;
