import styles from "./styles.module.css"
import Link from "next/link"


export default function Folder(){
    return(
        
        <div>
           
            <div>
            <img className={styles.bannerfundo}
                src="/bannerfundo.png" 
                alt=""

                />
            </div >
            <div>
            <img className={styles.imagemcirculo}
                src="/ellipse 4.png"
                alt=""

                />


            </div>
           
            <div className={styles.imageText}>
                <h1>
                    <p>Developer</p>
                    <p>Women</p>
                </h1>

            </div>
            <div className={styles.subtexto}>
                <h2>
                    <p>Bem-vinda ao Developer Women, um evento dedicado a todas as mulheres apaixonadas por tecnologia, 
                inovação e desenvolvimento! É o nosso prazer convidá-la para um dia repleto de inspiração, 
                aprendizado e oportunidades de networking.</p>
                </h2>
                

            </div>
            <Link href="/eventos">
            <div>
        
            <button className={styles.entrar}>PARTICIPE</button>

            </div>
            </Link>  
            



           


           
            
        </div>
    )
}
