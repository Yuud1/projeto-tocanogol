import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo3.png"
import "../../styles/Dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <img
          src={Logo} // Substitua pelo caminho correto da logo
          alt="Logo"
        />
        <button onClick={handleLogout}>Deslogar</button>
      </header>

      {/* Conteúdo principal */}
      <div>
        <h1 className="dashboard-title">Bem-vindo ao Dashboard</h1>
        <div className="dashboard-buttons">
          <button onClick={() => handleRedirect("/")}>Home</button>
          <button onClick={() => handleRedirect("/users")}>Usuários</button>
          <button onClick={() => handleRedirect("/posts")}>Posts</button>
          <button onClick={() => handleRedirect("/ads")}>Propagandas</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
