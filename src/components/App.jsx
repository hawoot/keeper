import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  const addNote = (note) => setNotes((prev) => [...prev, note]);
  const removeNote = (index) =>
    setNotes((prev) => prev.filter((_, idx) => idx !== index));
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          removeNote={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
