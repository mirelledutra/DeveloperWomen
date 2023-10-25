import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./styles.module.css";

export default function ListCard() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3020/eventos")
            .then(resultado => {
                setEventos(resultado.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Ocorreu um erro ao carregar os eventos.</p>;
    }

    return (
        <div className={styles.listCard}>
            {eventos.map(evento => (
                
                <Card 
                
                    key={evento.id}
                    id={evento.id}
                    titulo={evento.titulo}
                    descricao={evento.descricao}
                    data={evento.data}
                    horario={evento.horario}
                    local={evento.local}
                    image={evento.image}
                    
                />
                
            ))}
            
        </div>
    );
}
