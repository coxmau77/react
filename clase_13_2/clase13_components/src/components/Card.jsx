//rafc (react arrow function component)

/** Uso de "Tailwind" para componentes con valores booleanos renderizado condicional*/
// export const Card = ({nombre, fecha, clubes, mundial, booleano}) => {
//   return (
//     <div className="m-6">
//         <h2 className={booleano?"bg-green-400":"bg-red-400"}>{nombre}</h2>
//         <small>{fecha}</small>
//         <p>{clubes}</p>
//         <p>{mundial ? "Gano copa mundia" : "Sigue participando"}</p>
//         <span className={booleano?"bg-green-400":"bg-red-400"}>{booleano ? "Verdadero" : "Falso"}</span>
//     </div>
//   )
// }
/** Uso de "clases" para componentes con valores booleanos renderizado condicional*/
export const Card = ({ nombre, fecha, clubes, mundial, booleano }) => {

    /** Aqui podremos utilizar logica con JS entes del return */
    
    return (
        <div className="m-6">
            <h2 className={booleano ? "primary" : "secondary"}>{nombre}</h2>
            <small>{fecha}</small>
            <p>{clubes}</p>
            <p>{mundial ? "Gano copa mundial" : "Sigue participando"}</p>
            <span className={booleano ? "bg-green-300" : "bg-red-300"}>{booleano ? "Verdadero" : "Falso"}</span>
        </div>
    )
}
