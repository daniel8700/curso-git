import { useState } from "react"
import Note from "./Note"
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(" ")
  const [showALL, setShowAll] = useState(false)
  imprimir(notes)
  console.log(showALL)

  const notesToShow = showALL
  ? notes : notes.filter( nota => nota.important === true)
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const random = Math.random()< 0.5;
    console.log(random);
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }
    console.log(noteObject.important);
    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showALL)}>
          show {showALL? "important" : "all"}
        </button>
      </div>
      <ul>
       {notesToShow.map(note =>
          <Note note={note} key={note.id}></Note>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange} />
        <button type="submit">save</button></form>
    </div>
  )

}
function imprimir(notes) {
  const result = notes.map(note => note)
  console.log(result);
}

export default App