
const App =()=>{
  const amigos = [
    { nombre: "Diego", edad: "25"},
    { nombre: "David", edad: "25"},
  ]
  return(
    <>
     <p>{amigos[0].nombre} {amigos[0].edad}</p>
     <p>{amigos[1].nombre} {amigos[1].edad}</p> 
    </>
  )
}

export default App