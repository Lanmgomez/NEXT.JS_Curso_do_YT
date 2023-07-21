import styles from './page.module.css'
import axios from 'axios'

import { getData2 } from './fetchApi/fetchApi2'

const getData = async () => {
  try {
    const fetchApi = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    const response = fetchApi.data
    
    return response

  } catch (error) {
    console.log(error)
  }
}

export default async function Page() {

  const data = await getData()

  const data2 = await getData2()
  
  return (
    <main className={styles.main}>
      <h1>usamos a função uma função para consumir a api</h1>
        <h2>A ideia é pré carregar os dados no lado do servidor, para dar uma impressão de carregar instantâneo no lado do usuário</h2>
        {data.map((info) => (
          <div key={info.id} id={info.id} className={styles.data1}>
            <li>Título: {info.title}</li>
          </div>
        ))}
        {data2.map((info) => (
          <div key={info.id} id={info.id} className={styles.data2}>
            <li>Título: {info.title}</li>
          </div>
        ))}
    </main>
  )
}
