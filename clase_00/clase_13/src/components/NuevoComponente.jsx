//No sera necesaria la importacion de react para los componentes ya que esto lo hace index.js
import "../css/root.css";

// rcf
export const NuevoComponente = () => {
  // Aqui dentro podremos agregar la logica de nuestro componente

  return (
    // Aqui estara todo lo que sea visual para mi componente
    <section className="ClassA ClassB pb-5">
      NuevoComponente
      <button className="btn btn-primary">button</button>
    </section>
  );
};

// export const xx = () => {return <p>hola xx</p>}
// export const yy = () => {<p>hola yy</p>}
