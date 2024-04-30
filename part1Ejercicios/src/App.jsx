const App = () => {
  const curso = "Desarrollo de aplicaciones full-stack"
  const part = [
    {contenido:"Fundamentos de React",calificacion:10},
    {contenido:"Usa Props y data",calificacion:7},
    {contenido:"Estado de un componente",calificacion:14},
  ]
  
  return(
    <div>
      <Header titulo={curso}/>
      <Content contenido = {part[0].contenido}calificacion = {part[0].calificacion}></Content>
      <Content contenido = {part[1].contenido}calificacion = {part[1].calificacion}></Content>
      <Content contenido = {part[2].contenido}calificacion = {part[2].calificacion}></Content>
      <Total total = {part[0].calificacion + part[1].calificacion + part[2].calificacion}></Total>
    </div>
  )
}
const Header =(props) => {
  return(
    <div>
      <h1>{props.titulo}</h1>
    </div>
  )
}
const Content =(props) =>{
  return(
    <div><p>{props.contenido} {props.calificacion}</p></div>
  )
}
const Total =(props)=>{
  return(
    <div><p> Total de puntaje en los ejercicios {props.total}</p></div>
  )
}

export default App
