import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import style from "../../styles/inscricao.module.css"

export default function Inscricao() {
    const [evento, setEvento] = useState({})
    const router = useRouter()

    const [inscricao, setInscricao] = useState({
        nome: "",
        email: "",


    });

    useEffect(() => {
        const id = router.query.id
        if (id) {
            console.log('executou')
            axios.get(`http://localhost:3020/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }
    }, [router]);


    const [inscricaoSucesso, setInscricaoSucesso] = useState(false);

    function efetuarInscricao(e) {
        e.preventDefault();
        if (!evento || !evento.id) {
            console.error("Detalhes do evento indisponível");
            return;
        }


    axios.post(`http://localhost:3020/inscricoes`, {
        nome:inscricao.nome,
        email: inscricao.email,
        eventoId: evento.id

    })
            .then((resultado) => {
                console.log(resultado.data);
                setInscricaoSucesso(true);
            })
            .catch((erro) => console.log(erro));
    }

    return (

        <>

            <h1 className={style.titulo}>Inscrição do Evento: {evento && evento.titulo}</h1>
            <p className={style.data}>Data:{evento && evento.data}</p>
            <p className={style.palestrante}>Palestrante:{evento && evento.palestrante} </p>

            <form onSubmit={e => efetuarInscricao(e)}>
                <div>
                    <label htmlFor="nome">Nome</label>
                  
                    <input className={style.inputnome}
                        type="text"
                        id="nome"
                        value={inscricao.nome}
                        onChange={e => setInscricao({ ...inscricao, nome: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input className={style.inputemail}
                        type="email"
                        id="email"
                        value={inscricao.email}
                        onChange={e => setInscricao({ ...inscricao, email: e.target.value })}
                        required
                    />
                </div>

                <button className={style.botton} type="submit">Efetuar inscrição</button>

            </form>
            {inscricaoSucesso && <p>Inscrição efetuada com sucesso!</p>}


        </>
    )

}