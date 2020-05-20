import React from "react";

const User = ({ user }) => {
  return (
    <>
      <div>
        {user.login ? (
          <>
            <h3>{user.name}</h3>
            <img src={user.avatar_url} width={100} height={100} alt="..." />
            <h3>{user.bio}</h3>
            <h4>Repos: {user.public_repos}</h4>
          </>
        ) : (
          <h1>Nenhum usuário</h1>
        )}
      </div>
    </>
  );
};

export default User;
