export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();
  return (
    <>
      <div className="container main-header">
        <h1>Hello</h1>
      </div>
      <div className="container">
        <h1>Here i will store the list</h1>
        <h1>{data.name}</h1>
      </div>
    </>
  );
}
