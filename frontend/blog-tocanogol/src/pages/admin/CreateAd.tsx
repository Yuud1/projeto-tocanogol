import React, { useState } from "react";
import "../../styles/createAd.css"; // Estilos personalizados

const CreateAd: React.FC = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [redirectLink, setRedirectLink] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [placement, setPlacement] = useState("main"); // Estado para o dropdown

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleAdSubmit = () => {
    if (!title || !redirectLink || !company || !description) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const adData = {
      title,
      image,
      redirectLink,
      company,
      description,
      placement,
    };

    console.log("Propaganda criada:", adData);
    alert("Propaganda criada com sucesso!");
    // Lógica para enviar a propaganda ao backend
  };

  return (
    <div className="create-ad">
      <h1>Criação de Propaganda</h1>

      {/* Campo de Título */}
      <input
        type="text"
        className="input-title"
        placeholder="Digite o título da propaganda..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Upload de Imagem */}
      <div className="image-upload">
        <label htmlFor="image-upload-input">Upload de Imagem:</label>
        <input
          id="image-upload-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      {/* Campo de Link de Redirecionamento */}
      <input
        type="text"
        className="input-link"
        placeholder="Digite o link de redirecionamento..."
        value={redirectLink}
        onChange={(e) => setRedirectLink(e.target.value)}
      />

      {/* Campo de Empresa */}
      <input
        type="text"
        className="input-company"
        placeholder="Digite o nome da empresa..."
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      {/* Campo de Descrição */}
      <textarea
        className="input-description"
        placeholder="Escreva uma breve descrição..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {/* Dropdown para selecionar o local da propaganda */}
      <div className="placement-dropdown">
        <label htmlFor="placement-select">Escolha o Local:</label>
        <select
          id="placement-select"
          value={placement}
          onChange={(e) => setPlacement(e.target.value)}
        >
          <option value="main">Propaganda Principal</option>
          <option value="sidebar">Lateral</option>
        </select>
      </div>

      {/* Botão de Publicar */}
      <button className="submit-button" onClick={handleAdSubmit}>
        Publicar Propaganda
      </button>
    </div>
  );
};

export default CreateAd;
