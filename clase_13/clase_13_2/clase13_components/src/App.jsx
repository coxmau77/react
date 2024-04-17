// import "./components/Card.css";
// import { Card } from "./components/Card";
import { Button } from "./components/Button";
import Team from "./components/Team";

function App() {

  return (
    <>
      {/* <Card nombre="Leonel Messi" fecha={1997} clubes={["Newwlls", "Barcelona", "PSG"]} mundial={true} booleano={false} />

      <Card nombre="Maradona" fecha={1986} clubes={["Boca Jrs", "Argentina"]} mundial={true} booleano={true} /> */}

      {/* Valores predeterminados de un componente */}
      {/* <Button />
      <Button number="2" />
      <Button number={5} /> */}

      <Button />
      <br />
      <Button txt="Press me" />
      {/* <br />
      <Button txt="Execute console log auto" onClick={console.log("1) Se ejecuto la funcionalidad del console log en cuanto se carga nuestra app, diriamos que 'en automatico'")}/>
      <br />
      <Button txt="Execute alert auto" onClick={alert("2) Se ejecuto la funcionalidad del boton apenas se cargo la app, diriamos que 'en automatico'")}/> */}
      {/* <br />
      <Button txt="Execute console log" onClick={() => console.log("3) Se ejecuto la funcionalidad del console log, solo cuando se hace click sobre el boton")}/>
      <br />
      <Button txt="Execute alert" onClick={() => alert("4) Se ejecuto la funcionalidad del boton , solo cuando se hace click sobre el boton")}/> */}

      <Team />
      <Team />
    </>
  )
}

export default App
