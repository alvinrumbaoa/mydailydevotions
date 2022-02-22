import React from "react";
import useSWR from "swr";

const notesEndpoint = "http://localhost:300/api/notes";
const getData = async () => {
  const response = await fetch(notesEndpoint);
  return await response.json();
};
const TodoApp = () => {
  const { data: notes } = useSWR(notesEndpoint, getData);

return (
    <div>
      {notes && notes.map(note => (
        <div key={note.id}>{note.verse}</div>
      ))
	}
    </div>
)
}

export default TodoApp