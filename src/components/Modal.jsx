import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg"
        onClick={(e) => e.stopPropagation()} //this will stop or prevent the modal from closing when user clicks inside the modal
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
