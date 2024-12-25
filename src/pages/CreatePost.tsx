import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Tema do editor
import "../styles/CreatePost.css"; // Estilos personalizados

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const [section, setSection] = useState("main"); // Estado para o dropdown

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePostSubmit = () => {
    if (!title || !subtitle || !author || !content) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const postData = {
      title,
      subtitle,
      author,
      content,
      section,
      image,
    };

    console.log("Post criado:", postData);
    alert("Post criado com sucesso!");
    // Lógica para enviar o post ao backend
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Títulos
      ["bold", "italic", "underline", "strike"], // Estilos de texto
      [{ color: [] }, { background: [] }], // Cores do texto
      [{ list: "ordered" }, { list: "bullet" }], // Listas
      ["link", "image", "video"], // Links, imagens, vídeos
      ["clean"], // Limpar formatação
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="create-post">
      <h1>Criação de Post</h1>

      {/* Campo de Título */}
      <input
        type="text"
        className="input-title"
        placeholder="Digite o título aqui..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Campo de Subtítulo */}
      <input
        type="text"
        className="input-subtitle"
        placeholder="Digite o subtítulo aqui..."
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />

      {/* Campo de Autor */}
      <input
        type="text"
        className="input-author"
        placeholder="Digite o nome do autor..."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      {/* Dropdown para selecionar a seção */}
      <div className="section-dropdown">
        <label htmlFor="section-select">Escolha a Seção:</label>
        <select
          id="section-select"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        >
          <option value="main">Sessão Principal</option>
          <option value="articles">Articles</option>
        </select>
      </div>

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

      {/* Editor de Conteúdo */}
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Escreva o conteúdo da matéria aqui..."
      />

      {/* Botão de Publicar */}
      <button className="submit-button" onClick={handlePostSubmit}>
        Publicar Post
      </button>
    </div>
  );
};

export default CreatePost;
