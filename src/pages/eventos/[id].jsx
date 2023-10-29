
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState} from "react"
import style from "../../styles/evento.module.css"
import Link from "next/link";

export default function EventosHome(){
    const [evento, setEvento] = useState({})
    const router = useRouter()

    useEffect(()=> {
        const id = router.query.id
        if (id) {
            console.log('executou')
            axios.get(`http://localhost:3020/eventos/${id}`)
            .then(resultado => setEvento(resultado.data))
        }
    }, [router]);
   

    return(
        <>
       
        <h1 className={style.titulo}>{evento.titulo}</h1>
        <h2 className={style.descricao}>{evento.descricao}</h2>
        <h3 className={style.palestrante}>Palestrante:{evento.palestrante}</h3>
        <h2 className={style.subtitulo}>Palestras e Workshops</h2>
       
        <ul>
        <p className={style.palestras}>
             {Array.isArray(evento.palestras)
                ? evento.palestras.map((palestra, index) => <li key={index}>{palestra}</li>)
                : <li>{evento.palestras}</li>
         }
           </p>
        </ul>
        <Link href={{pathname: `/inscricao/${evento.id}`}}>
        <button className={style.inscrever}>Inscreva-se</button>
        </Link>
        
        
        </>
    )
}
