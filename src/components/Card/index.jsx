import Link from "next/link";
import styles from "./styles.module.css";


export default function Card({ id, image, titulo, descricao, data, horario, local}){
return(
    <div className={styles.card}>
    
        <Link href={`/eventos/${id}`}>
            <h2 className={styles.cardTitulo}>{ titulo }</h2>
            
            
            <div className={styles.descricao}>Descricao: {descricao}</div>
            <img className={styles.image} src={image}/>

            <div className={styles.data}>Data: {data}</div>
            <div>Horario: {horario}</div>

            <div>Local: {local}</div>
           
         

          
        </Link>

    </div>
)
}