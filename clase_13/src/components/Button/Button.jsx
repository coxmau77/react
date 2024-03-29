// POR DEFAULT  Props con parametro predeterminado numero = "0"
// export default function Button({ numero = "0" }) {
//   return (
//     <>
//       <button>{numero}</button>
//     </>
//   );
// }

// onClick
// export default function Button({ texto, onClick }) {
//   return (
//     <>
//       <button onClick={onClick}>{texto}</button>
//     </>
//   );
// }

// en component (COMO UNA DE LAS MEJORES PRACTICAS DE TRABAJARLO EN LOS COMPONENTES)
export default function Button({ texto}) {
  return (
    <>
      <button onClick={()=>alert("Se hizo click en el boton")}>{texto}</button>
    </>
  );
}
