import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isClicked, updateClick] = React.useState(false);
  const [noteText, updteNote] = React.useState({
    titletext: "",
    contentText: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    updteNote((prevVAlue) => {
      return {
        ...prevVAlue,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    props.onAdd(noteText);
    event.preventDefault();
  }

  function handletext() {
    updateClick(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked ? (
          <input name="title" placeholder="Title" onChange={handleChange} />
        ) : null}
        <textarea
          onClick={handletext}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          onChange={handleChange}
        />
        <Zoom in={isClicked}>
          <Fab onClick={handleClick}>
            <CreateIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
