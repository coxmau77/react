// Creamos un contador para interactuar con los estados de React (hooks)
// Lo primero que debemos hacer es importar los hooks de React, no es necesario instalar ya que es una funcionalidad nativa de esta libreria

// 1) importar useState, Crea variables de estado dinamico
import { useState } from "react";
// 2) importar un boton
import { Button } from "./Button";

export const Counter = () => {

    // let [initialValue, changeValue] = useState(0)
    let [initialValue, setInitialValue] = useState(0)


    return (
        <>
            <div>Counter</div>
            <Button txt="-" onClick={() => setInitialValue(--initialValue)}/>
            <span>Value: {initialValue}</span>
            <Button txt="+" onClick={() => setInitialValue(++initialValue)} className="bg-red-400"/>
        </>
    )
}
