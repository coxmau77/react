// Creamos un contador para interactuar con los estados de React (hooks)
// Lo primero que debemos hacer es importar los hooks de React, no es necesario instalar ya que es una funcionalidad nativa de esta libreria

// 1) importar useState, Crea variables de estado dinamico
import { useState, useEffect } from "react";
// 2) importar un boton
import { Button } from "./Button";
// 3) importar useEffect
// import { useEffect } from "react";

export const Counter = () => {

    // let [initialValue, changeValue] = useState(0)
    let [initialValue, setInitialValue] = useState(0)

    useEffect(() => {
        console.log('Se ejecuto useEffect()')
    }, [initialValue]);

    return (
        <>
            <div>Counter</div>
            <Button txt="-" onClick={() => setInitialValue(--initialValue)}/>
            <span>Value: {initialValue}</span>
            <Button txt="+" onClick={() => setInitialValue(++initialValue)} className="bg-red-400"/>
        </>
    )
}
