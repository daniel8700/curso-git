import Note from "./Note"
const App = (props) => {
  const { notes } = props
  imprimir(notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) =>

          <Note note = {note} key={note.id}></Note>
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