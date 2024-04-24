// import {Test} from './components/Test'
import { GridUsers } from './components/GridUsers'
import './assets/css/App.css'

export const App = () => {
  return (
    // <>
    //   <Test nombre="Mauricio" whatsApp={1169936986} userActive={true}/>
    //   <Test nombre="Pepe" whatsApp={1169936986} userActive={false}/>
    // </>
    <>
      <header className="title">Usuarios</header>
      <main>
        {/* Componente grilla peliculas, a la misma vez cada card de la grilla tendra un componente para los botones */}
        <GridUsers />
      </main>

    </>

  )
}