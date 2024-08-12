import "../css/root.css";

export default function UserCard({ name, surName, age, clubes, trabajo, spanCondicional }) {
  return (
    <>
      <h1>Nombre: {name}</h1>
      <h2 style={{backgroundColor:spanCondicional?"lightgreen":"red"}}>Apellido: {surName}</h2>
      <h2>Edad: {age}</h2>
      <p>{clubes}</p>
      <p>{trabajo?"Trabaja en la zapateria":"Esta en busca de empleo"}</p>
      <span style={{backgroundColor:spanCondicional?"green":"red"}}>{spanCondicional?"Verdadero":"Falso"}</span>
    </>
  );
}
