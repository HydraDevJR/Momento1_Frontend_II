import { Card } from "./Card";
import { Componente3 } from "./Componente3";

function Componente2() {
    const title = "TITULO";

    return (
        <div className="componente2">
            <div className="componente2-1">
                <div className="componente2-2">
                    <Card contenido={<Componente3 />} titulo={title} />
                    <Card contenido={<Componente3 />} titulo={title} />
                    <Card contenido={<Componente3 />} titulo={title} />
                    <Card contenido={<Componente3 />} titulo={title} />
                </div>
                <div className="componente2-3">
                    <h3>COMPONENTE DOS</h3>
                </div>
            </div>
        </div>
    );
}

export { Componente2 };