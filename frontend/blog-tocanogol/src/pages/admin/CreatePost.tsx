import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import "../../styles/CreatePost.css";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [actor, setAuthor] = useState("");
  const [urlimage, setUrlImage] = useState(""); // Alterado para armazenar a URL da imagem
  const [description, setContent] = useState("");
  const [category, setSection] = useState("main");

  const handlePostSubmit = () => {
    if (!title || !subtitle || !actor || !description || !urlimage) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const postData = {
      title,
      subtitle,
      actor,
      description,
      category,
      urlimage,
    };

    axios
      .post("http://localhost:8080/artigo/criar", postData)
      .then((response) => {
        alert("Post criado com sucesso!");
        console.log("Post criado:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao criar o post:", error);
        alert("Erro ao criar o post.");
      });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
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
      <input
        type="text"
        className="input-title"
        placeholder="Digite o título aqui..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="input-subtitle"
        placeholder="Digite o subtítulo aqui..."
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <input
        type="text"
        className="input-author"
        placeholder="Digite o nome do autor..."
        value={actor}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <div className="section-dropdown">
        <label htmlFor="section-select">Escolha a Seção:</label>
        <select
          id="section-select"
          value={category}
          onChange={(e) => setSection(e.target.value)}
        >
          <option value="main">Sessão Principal</option>
          <option value="articles">Articles</option>
        </select>
      </div>
      <div className="image-url">
        <label htmlFor="image-url-input">URL da Imagem:</label>
        <input
          id="image-url-input"
          type="text"
          className="input-url"
          placeholder="Insira a URL da imagem..."
          value={urlimage}
          onChange={(e) => setUrlImage(e.target.value)}
        />
      </div>
      <ReactQuill
        theme="snow"
        value={description}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Escreva o conteúdo da matéria aqui..."
      />
      <button className="submit-button" onClick={handlePostSubmit}>
        Publicar Post
      </button>
    </div>
  );
};

export default CreatePost;
