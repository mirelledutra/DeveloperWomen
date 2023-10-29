import axios from "axios";
import { useState } from "react";
import style from "../styles/cadastro.module.css"

export default function CadastrarEvento() {
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        data: "",
        horario: "",
        local: "",
        image: "",
        palestrante: "",
        palestras:"",
        inscricoes: ""
    })



    function limpar()  {
        setEvento({
            titulo: "",
            descricao: "",
            data: "",
            horario: "",
            local: "",
            image: "",
            palestrante: "",
            palestras:"",
            inscricoes: ""
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
        <div className={style.container}>
        <h1 className={style.cadastro}>Cadastrar Evento</h1>
            <form onSubmit={e => cadastrarEvento(e)}>
                <div>
                    <label className={style.titulo} htmlFor="titulo">Título:</label>
                    <input className={style.inputt}
                        type="text"
                        id="titulo"
                        value={evento.titulo}
                        onChange={e => setEvento({
                            ...evento,
                            titulo: e.target.value
                        })} />
                </div>
                <div>
                    <label className={style.descricao} htmlFor="descricao">Descrição:</label>
                    <textarea className={style.desc}
                        id="descricao"
                        value={evento.descricao}
                        onChange={e => setEvento({
                            ...evento,
                            descricao: e.target.value
                        })}>

                    </textarea>
                </div>
                <div>
                    <label className={style.data} htmlFor="data">Data: </label>
                    <input className={style.d}
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
                    <label className={style.horario}htmlFor="horario">Horário: </label>
                    <input className={style.hr}
                        type="horario"
                        id="horario"
                        value={evento.horario}
                        onChange={e => setEvento({
                            ...evento,
                            horario: e.target.value
                        })}
                    />
                </div>


                <div>
                    <label className={style.local}htmlFor="local">Local:</label>
                    <input className={style.l}
                        type="text"
                        id="local"
                        value={evento.local}
                        onChange={e => setEvento({ ...evento, local: e.target.value })} />
                </div>
                <div>
                    <label className={style.palestrante}htmlFor="palestrante">Palestrante: </label>
                    <input className={style.p}
                        type="palestrante"
                        id="palestrante"
                        value={evento.palestrante}
                        onChange={e => setEvento({
                            ...evento,
                            palestrante: e.target.value
                        })}
                    />
                </div>
                <div>
                <label className={style.palestras} htmlFor="palestras">Palestras:</label>
                <textarea className={style.pl}
                id="palestras"
                value={evento.palestras}
                onChange={e =>setEvento({
                    ...evento,
                    palestras: e.target.value
                })}>
    
                </textarea>
            </div>

                <button className={style.buttons}type="submit" >Cadastrar</button>
            </form>


        </div>

 
        </>
    );
}