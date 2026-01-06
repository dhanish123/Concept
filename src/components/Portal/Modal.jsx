import { useState } from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Show Popup</button>

      {open &&
        ReactDOM.createPortal(
          <div>
            <p>This is a popup</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default Modal;
