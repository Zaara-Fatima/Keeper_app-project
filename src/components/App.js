import "/public/styles.css";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../Notes";
import CreateArea from "./CreateArea";

function App() {
  const [newNotes, setNotes] = React.useState(notes);

  function addNotes(noteText) {
    setNotes((prevNotes) => [...prevNotes, noteText]);
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, key) => {
        return noteItem.key !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      <Footer />
      <div>
        {newNotes.map((noteItem) => (
          <Note
            id={noteItem.key}
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
            clicked={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
