import React, { useState } from "react";
import ReactDom from "react-dom";
import './Model.css'; 
const Model = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>tOdo list</h2>
          <p>Thank you for adding new task!</p>
          <button className="close-btn" onClick={() => setShowModal(false)}>
            Accept
          </button>
        </div>
      </div>
    );
  };

  return  ReactDom.createPortal(
    <>
      <button className="open-btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && <MyModal />}
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default Model;
