import './styles.css';


type props = {

    img: string;
    profile: string;
    follows: number;
    location: string;
    name: string;
}

const ResultCard = ({ img, profile, follows, location, name } : props) => {

    return (
        <div className="container-result-card">
            <div className="result-content">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h2>Informações</h2>
                    <div className="field">
                        <h1>Perfil: <a href={profile} target="_blank"> {profile}</a></h1>
                    </div>
                    <div className="field">
                        <h1>Seguidores: <span>{follows}</span></h1>
                    </div>
                    <div className="field">
                        <h1>Localidade: <span>{location}</span></h1>
                    </div>
                    <div className="field">
                        <h1>Nome: <span>{name}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResultCard;