import React from "react";
import "../styles/hero.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Imagens para Hero
import noticia1 from "../assets/images/noticia1.png";
import noticia2 from "../assets/images/noticia2.png";
import noticia3 from "../assets/images/noticia3.png";

// Imagens para NewsGrid
import image1 from "../assets/images/article1.jpg";
import image2 from "../assets/images/article2.jpg";
import image3 from "../assets/images/article3.webp";
import image4 from "../assets/images/article4.jpg";
import image5 from "../assets/images/article5.jpg";
import image6 from "../assets/images/article6.jpg";

// Dados do Hero
const heroData = [
  {
    id: 1,
    title: "Notícia 1: Novo lançamento!",
    imageUrl: noticia1,
    newsLink: "https://exemplo.com/noticia1",
  },
  {
    id: 2,
    imageUrl: noticia2,
    newsLink: "https://exemplo.com/noticia2",
  },
  {
    id: 3,
    title: "Notícia 3: Atualização de mercado!",
    imageUrl: noticia3,
    newsLink: "https://exemplo.com/noticia3",
  },
];

// Dados do NewsGrid
const newsData = [
  { id: 1, title: "São Paulo compra Neymar", imageUrl: image1, link: "/article/1" },
  { id: 2, title: "Notícia 2", imageUrl: image2, link: "/article/2" },
  { id: 3, title: "Notícia 3", imageUrl: image3, link: "/article/3" },
  { id: 4, title: "Notícia 4", imageUrl: image4, link: "/article/4" },
  { id: 5, title: "Notícia 5", imageUrl: image5, link: "/article/5" },
  { id: 6, title: "Notícia 6", imageUrl: image6, link: "/article/6" },
];

// Componente Principal
const MainContainer = () => {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <div className="heroMain">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {heroData.map((newsItem) => (
              <SwiperSlide key={newsItem.id}>
                <Link to={`/news/${newsItem.id}`}>
                  <img
                    src={newsItem.imageUrl}
                    alt={newsItem.title}
                    className="heroImage"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* News Grid Section */}
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
    </div>
  );
};

export default MainContainer;
