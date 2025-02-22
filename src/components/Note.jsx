import React from "react";

function Note(props) {
  function handleDelete() {
    console.log(props.id);
    props.removeNote(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
