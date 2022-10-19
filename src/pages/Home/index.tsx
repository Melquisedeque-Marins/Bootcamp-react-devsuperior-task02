import { Link } from "react-router-dom";

import './styles.css';

const Home = () => {
  return (
    <div className="container-home">
        <div className="title">
            <h1>Desafio Github API</h1>
        </div>
        <p>Bootcamp Spring react - DevSuperior</p>
        <button type="button" className="btn btn-primary">Começar</button>
    </div>
  );
};

export default Home;