import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note.js";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("I am clicked..")
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((currData, indx) => {
        return id !== indx;
      })
    );
  };

  return (
    <>
      <div>
        <Header />
        <CreateNote passNote={addNote} />
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default App;
