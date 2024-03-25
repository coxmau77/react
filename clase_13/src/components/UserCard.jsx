import "../css/root.css";

export default function UserCard({ name, surName, age }) {
  return (
    <>
      <h1>Nombre: {name}</h1>
      <h2>Apellido: {surName}</h2>
      <h2>Edad: {age}</h2>
    </>
  );
}
