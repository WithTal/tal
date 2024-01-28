import Home from "./pagepage";

export default async function Page() {
  const d = await fetch(process.env.HOST + "/api/query", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(values)
  }).then((response) => response.json())
  console.log(d)
  return (
    <Home />
  )
}