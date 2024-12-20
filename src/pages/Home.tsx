import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/heroMain";
import AdvertisingMain from "../components/advertisingMain";
import ArticleMain from "../components/articleMain";

const Home = () => {
  return (
    <>
      <Header />
      <AdvertisingMain />
      <Hero />
      <ArticleMain />
      <Footer />
    </>
  );
};

export default Home;
