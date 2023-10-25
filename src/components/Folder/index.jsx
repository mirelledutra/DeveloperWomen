import styles from "./styles.module.css"
import Image from "next/image"
import Link from "next/link"


export default function Folder(){
    return(
        
        <div>
           
            <div>
            <Image className={styles.c}
                src="/bannerfundo.png" // Ou "/Images/mulherdeveloper.png" se estiver em uma subpasta
                alt="Mulheres na Tecnologia"
                width={1440} // Defina a largura da imagem aqui
                height={600} // Defina a altura da imagem aqui
                />
            </div >
            <div>
            <Image className={styles.b}
                src="/ellipse 4.png"
                alt="circulo"
                width={300}
                height={300}
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
