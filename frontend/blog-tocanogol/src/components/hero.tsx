import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";

// Defina os tipos dos dados
interface HeroItem {
  id: number;
  title: string;
  urlimage: string;
  newsLink: string;
}

interface NewsItem {
  id: number;
  title: string;
  urlimage: string;
  link: string;
}

const Hero: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroItem[]>([]);
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Buscar dados para o Hero (Notícias principais)
    axios.get("http://localhost:8080/artigo/listar") // Ajuste a URL para sua API
      .then((response) => {
        setHeroData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do Hero:", error);
      });

    // Buscar dados para o News Grid (Artigos)
    axios.get("http://localhost:8080/artigo/listar") // Ajuste a URL para sua API
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados de notícias:", error);
      });
  }, []);

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
                    src={newsItem.urlimage}
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
              <img src={news.urlimage} alt={news.title} />
              <h3>{news.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
