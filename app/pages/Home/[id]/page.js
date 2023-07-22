import Link from "next/link"

export default async function Page({ params }) {

  const getDataID = async () => {
    const fetchData_id = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const response_id = await fetchData_id.json()
    return response_id;
  }

  const data_id = await getDataID()

  return (
    <div>
      <h1>My Post: {params.id}</h1>
      <div>
        <h3>Criamos uma pasta com colchetes [id] e dentro um arquivo 'page.js'</h3>
        <h3>Em rotas dinâmicas, usamos a prop params</h3>
        <p>A prop 'params' já identifica o parâmetro do id específico</p>
      </div>
      <ul>
        <li>userId: {data_id.id}</li>
        <li>title: {data_id.title}</li>
        <Link href="/pages/Home">Voltar</Link>
      </ul>
    </div>
  )
}