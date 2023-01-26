import { Link } from "react-router-dom";
import "./home.css";
import Profecional from "../../assets/profecional.png";
import Impresora2 from "../../assets/impresora2.png";
import Impresion3 from "../../assets/impresion3.png";

const Home = () => {
    return (
    <div className="titulo">
    <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
    >
        <div class="carousel-inner">
            <div class="carousel-item active">
                <Link className="prod" to="/productos">
                    <img src={Profecional} class="d-block w-100" alt={Profecional} />
                </Link>
            </div>
            <div class="carousel-item">
                <Link className="prod" to="/productos">
                    <img src={Impresora2} class="d-block w-100" alt={Impresora2} />
                </Link>
            </div>
            <div class="carousel-item">
                <Link className="prod" to="/productos">
                    <img src={Impresion3} class="d-block w-100" alt={Impresion3} />
                </Link>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            ata-target="#carouselExampleControls"
            data-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
        </div>
    </div>   
    );
};

export default Home;