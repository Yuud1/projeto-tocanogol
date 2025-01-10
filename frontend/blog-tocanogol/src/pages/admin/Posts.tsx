import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/posts.css";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  // Buscar posts da API
  useEffect(() => {
    axios
      .get("http://localhost:8080/artigo/listar") // Ajuste para o URL correto da sua API
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
      });
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:8080/artigo/delete/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao excluir o post:", error);
      });
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-post/${id}`);
  };

  return (
    <div className="posts">
      <h1>Posts</h1>
      <button onClick={() => navigate("/create-post")} className="create-post-btn">
        Criar Novo Post
      </button>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-actions">
              <button onClick={() => handleEdit(post.id)}>Editar</button>
              <button onClick={() => handleDelete(post.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
