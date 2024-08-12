// En este ejemplo, he definido dos conjuntos de clases: baseClasses y additionalClasses. baseClasses contiene las clases que se aplican independientemente de la lógica condicional, mientras que additionalClasses contiene clases que se aplican específicamente cuando userActive es true. Luego, concateno estas clases dentro de la expresión JSX para asegurarme de que todas se apliquen correctamente según la condición dada.

export const Test = (props) => {

  let { nombre, whatsApp, userActive } = props;

  // Clases base para el componente
  let baseClasses = userActive
    ? "bg-green-400 text-green-950"
    : "bg-red-400 text-red-950";

  // Clases adicionales basadas en alguna lógica
  let additionalClasses = userActive ? " p-2" : " p-4";

  return (
    <div className={baseClasses + additionalClasses}>
      Nombre: {nombre} | Telefono: {whatsApp}
    </div>
  );
}
