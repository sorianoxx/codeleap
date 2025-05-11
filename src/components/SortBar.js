import React from "react";

const SortBar = ({ sortType, setSortType }) => {
  return (
    <div className="sort-bar">
      <label htmlFor="sort">Ordenar por: </label>
      <select
        id="sort"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="newest">Mais recentes</option>
        <option value="oldest">Mais antigos</option>
        <option value="title">Título (A-Z)</option>
      </select>
    </div>
  );
};

export default SortBar;
