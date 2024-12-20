import React from "react";
import "../styles/article.css"
import "../styles/container.css";
import image1 from "../assets/images/article1.jpg";
import image2 from "../assets/images/article2.jpg";
import image3 from "../assets/images/article3.webp";
import image4 from "../assets/images/article4.jpg";
import image5 from "../assets/images/article5.jpg";
import image6 from "../assets/images/article6.jpg";

// Dados das notícias
const newsData = [
  { id: 1, title: "Sao paulo compra neymar", imageUrl: image1 },
  { id: 2, title: "Notícia 2", imageUrl: image2 },
  { id: 3, title: "Notícia 3", imageUrl: image3 },
  { id: 4, title: "Notícia 4", imageUrl: image4 },
  { id: 5, title: "Notícia 5", imageUrl: image5 },
  { id: 5, title: "Notícia 5", imageUrl: image6 },
];

const NewsGrid = () => {
  return (
    <div className="container news-grid-container">
      {newsData.map((news) => (
        <div key={news.id} className="news-item">   
          <img src={news.imageUrl} alt={news.title} />
          <h3>{news.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
