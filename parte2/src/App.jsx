const App = (props) => {
  const { notes } = props
  imprimir(notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>

          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )

}
function imprimir(notes){
const result = notes.map(note => note.id)
console.log(result);
}
export default App