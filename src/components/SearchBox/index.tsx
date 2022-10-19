import { useState } from "react";
import ResultCard from "../ResultCard";
import axios from "axios";

import './styles.css';

type FormData = {
    user: string;
}

type Info = {
    avatar_url: string;
    url: string;
    followers: number;
    location: string;
    name: string;
}

const SearchBox = () => {

    const [info, setInfo] = useState<Info>();

    const [formData, setFormData] = useState<FormData>({
        user: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
       event.preventDefault();
       axios.get(`https://api.github.com/users/${formData.user}`)
       .then((Response) => {
        setInfo(Response.data);
       })
       .catch((error) => {
        setInfo(undefined);
       })
       
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
       const nome = event.target.name;
       const value = event.target.value;

       setFormData({...formData, [nome]:value})
    }

  return (
    <>
    <div className="container-search-box">
        <div className="content">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <h1>Encontre um perfil Github</h1>
                </div>
                <input type="text" onChange={handleChange} name="user" value={formData.user} placeholder="Usuário Github" />
                <button type="submit" className="btn btn-primary">Encontrar</button>
            </form>
        </div>
    </div>
       {info &&
        <ResultCard  img={info.avatar_url} profile={info?.url} follows={info.followers} location={info.location} name={info.name}/>}
    </>
  );
};

export default SearchBox;