import './CardProduct.css';

export default function CardProduct({title, price, stock, available}) {

    // ------
    // Podemos usar logica de programacion antes del return
    let displayStock = true;
    // ------

  return (
    // <div style = {{marginBottom: "1rem"}}>
    //     <img src="../../images/no_img.png" alt="Placeholder main product front" />
    //     <h2>{title}</h2>
    //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, officiis.</p>
    //     <span style={{backgroundColor:available?"lightgreen":"tomato"}}>${price}</span>
    //     <br />
    //     <span>{stock}</span>
    // </div>

    // Clases en componentes
    <div className='product-card'>
        <img src="../../images/no_img.png" alt="Placeholder main product front" />
        <h2>{title}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, officiis.</p>
        <span className={available?"valid":"invalid"}>${price}</span>
        <br />
        <span style={{visibility:displayStock?"visible":"hidden"}}>{stock}</span>
    </div>
  )
}
