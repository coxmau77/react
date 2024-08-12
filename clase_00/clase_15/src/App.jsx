import './App.css'
import {Test} from './components/Test'

function App() {

  return (
    <>
      <Test nombre="Mauricio" whatsApp={1169936986} userActive={true}/>
      <Test nombre="Pepe" whatsApp={1169936986} userActive={false}/>
    </>
  )
}

export default App
