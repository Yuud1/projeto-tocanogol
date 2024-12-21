import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import AdvertisingMain from "../components/advertisingMain";
import "../styles/news.css";

import noticia1 from "../assets/images/noticia1.png";
import noticia2 from "../assets/images/noticia2.png";
import noticia3 from "../assets/images/noticia3.png";
import article1 from "../assets/images/article1.jpg";
import article2 from "../assets/images/article2.jpg";
import article3 from "../assets/images/article3.webp";
import article4 from "../assets/images/article4.jpg";
import article5 from "../assets/images/article5.jpg";
import article6 from "../assets/images/article6.jpg";

// Dados das notícias
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

// Dados dos artigos
const articlesData = [
  { id: 1, title: "São Paulo compra Neymar", imageUrl: article1, content: "Detalhes completos da notícia 1..." },
  { id: 2, title: "Notícia 2", imageUrl: article2, content: "Detalhes completos da notícia 2..." },
  { id: 3, title: "Notícia 3", imageUrl: article3, content: "Detalhes completos da notícia 3..." },
  { id: 4, title: "Notícia 4", imageUrl: article4, content: "Detalhes completos da notícia 4..." },
  { id: 5, title: "Notícia 5", imageUrl: article5, content: "Detalhes completos da notícia 5..." },
  { id: 6, title: "Notícia 6", imageUrl: article6, content: "Detalhes completos da notícia 6..." },
];

const News = () => {
  const { id, type } = useParams<{ id: string; type: string }>();

  // Determine os dados a serem exibidos com base no parâmetro 'type'
  const data = type === "news" ? heroData : articlesData;
  const item = data.find((entry) => entry.id === parseInt(id || ""));

  if (!item) {
    return <div>{type === "news" ? "Notícia não encontrada." : "Artigo não encontrado."}</div>;
  }

  return (
    <>
      <AdvertisingMain />
      <Header />
      <div className="detail-page">
        <h1>{item.title}</h1>
        <img src={item.imageUrl} alt={item.title} />
        <p>{item.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default News;
