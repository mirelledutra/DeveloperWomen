


import styles from "../styles/Home.module.css"

import Folder from "@/components/Folder"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keyworkds" content="Mulheres, tecnologia, desenvolvimento"></meta>
    </Head>
    <div>
    <div className={styles.container}>
      
        <Folder />
      
    </div>
    </div>
    </>

    

    
   
    


    
  )
}
