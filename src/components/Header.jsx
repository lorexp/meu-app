import React from "react";

const Header = ({ handleClick, handleInputChange }) => {
  return (
    <div>
      <label>Usuário do GitHub: </label>
      <input type="text" name="user" onChange={handleInputChange} />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
};

export default Header;
