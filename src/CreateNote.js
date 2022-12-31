import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }; // It check the name is title or content and then store the current value from value attribute.
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {  // onDoubleClick is not working I don't know? problem! It only work on plus button when we click double on plus button is run this function backToNormal().
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              onChange={InputEvent}
              name="title"
              placeholder="Title"
              value={note.title}
              autoComplete="off"
            />
          ) : null}
          <textarea
            onChange={InputEvent}
            onClick={expandIt}
            name="content"
            value={note.content}
            placeholder="write a note..."
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
