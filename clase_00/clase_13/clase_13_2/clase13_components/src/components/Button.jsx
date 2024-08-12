/**Ejemplo de eventos en react */

/* Valores predeterminados de un componente */
// export const Button = ({number = "0"}) => {
//   return (
//     <button>My Button {number}</button>
//   )
// }
export const Button = ({txt = "no content text", onClick}) => {
  return (
    // <button onClick = {console.log("Se ejecuto la funcionalidad del boton")}>{txt}</button>
    <button className="bg-emerald-300 rounded-full py-1 px-4 m-2 text-sm text-slate-900" onClick = {onClick}>{txt}</button>
  )
}