import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/posts.css";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Post 1", content: "Conteúdo do post 1" },
    { id: 2, title: "Post 2", content: "Conteúdo do post 2" },
    { id: 3, title: "Post 3", content: "Conteúdo do post 3" },
  ]);

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
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
