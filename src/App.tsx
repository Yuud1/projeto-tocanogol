// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Sobre from './pages/Sobre';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import Ads from './pages/Ads'; // Importando a página Ads
import CreateAd from './pages/CreateAd'; // Importando a página CreateAd
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/ads" element={<Ads />} /> {/* Rota para visualizar propagandas */}
        <Route path="/create-ad" element={<CreateAd />} /> {/* Rota para criar novas propagandas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
