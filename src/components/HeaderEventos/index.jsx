import Link from "next/link"
import styles from "./styles.module.css"
export default function HeaderEventos(){

    return(
        <>
        <header className={styles.header}>
        <h1>Programação do Evento</h1>
        <Link href="/">
            <div className={styles.voltar}>
            Voltar
            </div>
          
        </Link>
   
        </header>
        </>
    )
 }
 
    

   
    



