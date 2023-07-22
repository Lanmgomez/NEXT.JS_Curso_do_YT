import Link from "next/link"

const getData = async () => {
  const fetchApi = await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await fetchApi.json()
  return response
}

export default async function Home() {

    const data = await getData()

return (
<>
    <h1>Rotas Dinâmicas</h1>
    {data.map((info) => (
        <div key={info.id} style={{ textAlign: "center", border: "1px solid", marginBottom: "20px", width: 500 }}>
        <ul id={info.userId}>
            <li>Id: {info.id}</li>
            <li>Title: {info.title}</li>
        </ul>
        <Link href={`/pages/Home/${info.id}`}>Ver Mais</Link>
        </div>
    ))}
</>
)
}
