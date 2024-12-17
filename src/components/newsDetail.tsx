// NewsDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import noticia1 from "../assets/images/noticia1.png";
import noticia2 from "../assets/images/noticia2.png";
import noticia3 from "../assets/images/noticia3.png";

const heroData = [
  {
    id: 1,
    title: "Notícia 1: Novo lançamento!",
    imageUrl: noticia1,
    content: "Conteúdo completo da notícia 1...",
  },
  {
    id: 2,
    title: "Notícia 2: Evento importante!",
    imageUrl: noticia2,
    content: "Conteúdo completo da notícia 2...",
  },
  {
    id: 3,
    title: "Notícia 3: Atualização de mercado!",
    imageUrl: noticia3,
    content: "Conteúdo completo da notícia 3...",
  },
];

const NewsDetail = () => {
  // Captura o ID da notícia da URL
  const { id } = useParams<{ id: string }>();
  // Encontra a notícia com o ID correspondente
  const newsItem = heroData.find((item) => item.id === parseInt(id || ""));
  
  if (!newsItem) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <div className="news-detail">
      <h1>{newsItem.title}</h1>
      <img src={newsItem.imageUrl} alt={newsItem.title} />
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
