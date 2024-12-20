import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      <ul>
        <li><a href="/add-post">Adicionar Postagem</a></li>
        <li><a href="/manage-users">Gerenciar Usuários</a></li>
      </ul>
    </div>
  );
};

export default Dashboard;
