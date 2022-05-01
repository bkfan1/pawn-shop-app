import { useState, useEffect } from "react";
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
      <section onClick={(e) => handleCloseClick(e)} className="modalOverlay is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <button title="Cerrar ventana modal" onClick={(e) => handleCloseClick(e)} className="delete is-large modalBtn" />

        <div className="customModal">{children}</div>
      </section>
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
