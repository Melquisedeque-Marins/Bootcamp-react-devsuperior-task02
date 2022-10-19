import { Link } from "react-router-dom";

import './styles.css';

const SearchBox = () => {
  return (
    <div className="container-search-box">
        <div className="content">
            <div className="title">
                <h1>Encontre um perfil Github</h1>
            </div>
            <input type="text" name="" id="" placeholder="Usuário Github" />
            <button type="button" className="btn btn-primary">Encontrar</button>
        </div>
    </div>
  );
};

export default SearchBox;