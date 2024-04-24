import {Test} from './components/Test'

export  const  App = () => {
  return (
    <>
      <Test nombre="Mauricio" whatsApp={1169936986} userActive={true}/>
      <Test nombre="Pepe" whatsApp={1169936986} userActive={false}/>
    </>
     
  )
}