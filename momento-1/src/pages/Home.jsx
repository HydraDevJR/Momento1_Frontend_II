import { Componente1 } from "../components/Componente1";
import { Componente2 } from "../components/Componente2";

import '../components/StylesComponents.css';

function Home() {
    return (
        <div className="home">
            <Componente1 />
            <Componente2 />
        </div>
    );
}

export { Home };