import './Card.css'


const Card = ({Libro, Autor, Estudiante}) => {
    return <div className="card">
        <h2>Aprobación de préstamo para:</h2>
            <p>Libro: {Libro} , Autor: {Autor} </p>
            <p>Estudiante: {Estudiante}</p>
        </div>;
};


export default Card;