import React from "react";
import "../styles/container.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import noticia1 from "../assets/images/noticia1.png";
import noticia2 from "../assets/images/noticia2.png";
import noticia3 from "../assets/images/noticia3.png";

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

const HeroMain = () => {
  return (
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
              {/* Link que vai redirecionar para a página de detalhes */}
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
  );
};

export default HeroMain;
