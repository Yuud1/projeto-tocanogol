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
    subtitle: "Descubra os detalhes do mais novo lançamento.",
    author: "Autor 1",
    postedAt: "25 de dezembro de 2024, 14:30",
    imageUrl: noticia1,
    content: "Conteúdo completo da notícia 1..",
  },
  {
    id: 2,
    title: "Notícia 2: Evento importante!",
    subtitle: "Saiba tudo sobre o evento que marcou a semana.",
    author: "Autor 2",
    postedAt: "24 de dezembro de 2024, 18:00",
    imageUrl: noticia2,
    content: "Conteúdo completo da notícia 2...",
  },
  {
    id: 3,
    title: "Notícia 3: Atualização de mercado!",
    subtitle: "Entenda as mudanças recentes no mercado.",
    author: "Autor 3",
    postedAt: "23 de dezembro de 2024, 10:15",
    imageUrl: noticia3,
    content: "Conteúdo completo da notícia 3...",
  },
];

// Dados dos artigos
const articlesData = [
  {
    id: 1,
    title: "SÃO PAULO compra Neymar e ele reclama muito slk bora bora bora",
    subtitle: "Negociação histórica agita o mercado do futebol.",
    author: "Esporte News",
    postedAt: "25 de dezembro de 2024, 15:00",
    imageUrl: article1,
    content: "Detalhes completos da notícia 1...oalo al oa lao al ao aloa lao lao",
  },
  { id: 2, title: "Notícia 2", subtitle: "", author: "Autor 4", postedAt: "24 de dezembro de 2024, 12:00", imageUrl: article2, content: "Detalhes completos da notícia 2..." },
  { id: 3, title: "Notícia 3", subtitle: "", author: "Autor 5", postedAt: "23 de dezembro de 2024, 08:45", imageUrl: article3, content: "Detalhes completos da notícia 3..." },
  { id: 4, title: "Notícia 4", subtitle: "", author: "Autor 6", postedAt: "22 de dezembro de 2024, 20:00", imageUrl: article4, content: "Detalhes completos da notícia 4..." },
  { id: 5, title: "Notícia 5", subtitle: "", author: "Autor 7", postedAt: "21 de dezembro de 2024, 17:30", imageUrl: article5, content: "Detalhes completos da notícia 5..." },
  { id: 6, title: "Notícia 6", subtitle: "", author: "Autor 8", postedAt: "20 de dezembro de 2024, 14:20", imageUrl: article6, content: "Detalhes completos da notícia 6..." },
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
        <h4 className="subtitle">{item.subtitle}</h4>
        <h4 className="author">Por: {item.author}</h4>
        <h4 className="posted-at">Publicado em: {item.postedAt}</h4>
        <div className="divider-line"></div>
        <img className="detail-image" src={item.imageUrl} alt={item.title} />
        <p className="content">{item.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default News;
