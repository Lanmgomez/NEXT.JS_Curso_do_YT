import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <h1>Meta Tags</h1>
         <h3>Podemos inserir informações como title e etc, com um component chamado: <b>Head</b> </h3>
      </div>

      <section>
          <hgroup>
            <h1>Explicação:</h1>
              <h2>01 - Criar uma pasta chamada: <b>pages</b>, dentro da pasta app</h2>
              <h2>02 - Criar subpastas com o nome referente a cada rota, exemplo: Home, Sobre Nós, etc.</h2>
              <h2>03 - Dentro de cada subpasta, adicionar um arquivo (".js", ".jsx" ou ".tsx") com o nome: page.js</h2>
                <ul>
                  <li>Esse arquivo chamado page.js será a rota, qualquer arquivo dentro dessa past com outro nome, não será acessível como rota.</li>
                  <li>Cada pasta referente a uma rota, terá o mesmo arquivo chamado: page.js</li>
                </ul>
          </hgroup>
      </section>
    </main>
  )
}
