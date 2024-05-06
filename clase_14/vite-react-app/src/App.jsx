// import {Test} from './components/Test'
import { GridUsers } from './components/GridUsers'
import './assets/css/App.css'

export const App = () => {
  return (
    
    <>
      <header className="title">Usuarios</header>
      <main>
        {/* Componente grilla peliculas, a la misma vez cada card de la grilla tendra un componente para los botones */}
        <GridUsers />
      </main>

    </>

  )
}