import axios from "axios";
import { useState } from "react";

export default function CadastrarEvento() {
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        data: "",
        horario: "",
        local: "",
    })

    function limpar()  {
        setEvento({
            titulo: "",
            descricao: "",
            data: "",
            horario: "",
            local: "",
        })
    }
    function cadastrarEvento(e) {
        e.preventDefault()
        console.log(evento)

        axios.post('http://localhost:3020/eventos', evento)
            .then(resultado => console.log(resultado.data))
            .catch(erro => console.log(erro))
            limpar()
    }
    return (
        <>

            <h1>Cadastrar Evento</h1>
            <form onSubmit={e => cadastrarEvento(e)}>
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        value={evento.titulo}
                        onChange={e => setEvento({
                            ...evento,
                            titulo: e.target.value
                        })} />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        value={evento.descricao}
                        onChange={e => setEvento({
                            ...evento,
                            descricao: e.target.value
                        })}>

                    </textarea>
                </div>
                <div>
                    <label htmlFor="data">Data: </label>
                    <input
                        type="date"
                        id="data"
                        value={evento.data}
                        onChange={e => setEvento({
                            ...evento,
                            data: e.target.value
                        })}
                    />
                </div>


                <div>
                    <label htmlFor="local">Local:</label>
                    <input
                        type="text"
                        id="local"
                        value={evento.local}
                        onChange={e => setEvento({ ...evento, local: e.target.value })} />
                </div>

                <button type="submit" >Cadastrar</button>
            </form>

        </>
    );
}