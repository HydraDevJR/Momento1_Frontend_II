
function Card({contenido, titulo}) {
    return (
        <div className="card">
            <div className="card-a">
                <div>{contenido}</div>
            </div>
            <div className="card-b">
                <h3>{titulo}</h3>
            </div>
        </div>
    );
}

export { Card };