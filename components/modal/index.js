import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <>
      <div className="modalOverlay is-flex is-justify-content-center is-align-items-center">
        

        <div className="customModal is-flex is-flex-direction-column p-3">
        <button onClick={handleCloseClick} title="Cerrar ventana modal" className="button is-align-self-flex-end">X</button>
          {children}

        </div>

      </div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
