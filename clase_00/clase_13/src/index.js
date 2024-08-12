import React from "react";
import ReactDOM from "react-dom/client";
import Card from "react-bootstrap/Card"; //Desde bootstrap instalado

import "./css/index.css";
// import reportWebVitals from './config/reportWebVitals';

// import App from './components/App.js';
// Importacion del nuevo componente creado
// import { NuevoComponente } from './components/NuevoComponente';

import UserCard from "./components/UserCard.jsx";
import CardProduct from "./components/CardProduct/CardProduct.jsx";
import Button from "./components/Button/Button.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.querySelector('body'));

// root.render(
//   <React.StrictMode>
//     <App />
//     <NuevoComponente />

//   </React.StrictMode>
// );

// reportWebVitals();

root.render(
  // fragment <
  <>
    {/* POR DEFAULT */}
    {/* <Button numero='1'/>
    <Button numero='5'/>
    <Button /> */}

    {/* onClick */}
    {/* <Button texto = "Mostrar alerta" onClick={()=>alert("Se hizo click en el boton")}/>
    <Button texto = "Mensaje por consola" onClick={()=>console.log("Se hizo click en el boton")}/> */}
    
    <Button texto="en component" />

    <UserCard
      name="Pepe"
      surName="Argento"
      age={50}
      clubes={["club a", "club b", "club c"]}
      trabajo={true}
      spanCondicional={true}
    />

    <CardProduct
      title="Titulo del producto 2"
      price={2.999}
      stock={50}
      available={true}
    />
    <CardProduct
      title="Titulo del producto 1"
      price={1.999}
      stock={10}
      available={false}
    />
    <CardProduct
      title="Titulo del producto 3"
      price={3.999}
      stock={0}
      available={true}
    />

    <Card />
  </>
  // />fragment
);
