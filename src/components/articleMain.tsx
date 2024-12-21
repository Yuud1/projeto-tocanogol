import React from "react";
import "../styles/article.css"
import "../styles/container.css";
import { Link } from "react-router-dom";
import image1 from "../assets/images/article1.jpg";
import image2 from "../assets/images/article2.jpg";
import image3 from "../assets/images/article3.webp";
import image4 from "../assets/images/article4.jpg";
import image5 from "../assets/images/article5.jpg";
import image6 from "../assets/images/article6.jpg";

// Dados das notícias
const newsData = [
  { id: 1, title: "São Paulo compra Neymar", imageUrl: image1, link: "/article/1" },
  { id: 2, title: "Notícia 2", imageUrl: image2, link: "/article/2" },
  { id: 3, title: "Notícia 3", imageUrl: image3, link: "/article/3" },
  { id: 4, title: "Notícia 4", imageUrl: image4, link: "/article/4" },
  { id: 5, title: "Notícia 5", imageUrl: image5, link: "/article/5" },
  { id: 6, title: "Notícia 6", imageUrl: image6, link: "/article/6" },
];


const NewsGrid = () => {
  return (
    <div className="container news-grid-container">
      {newsData.map((news) => (
        <div key={news.id} className="news-item">
          <Link to={news.link}>
            <img src={news.imageUrl} alt={news.title} />
            <h3>{news.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
