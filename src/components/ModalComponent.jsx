import React, { useState } from "react";
import Modal from "./Modal";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <h1 className="p-4 bg-orange-500 text-3xl font-bold text-gray-50 text-center">
          Vrit Technology
        </h1>
      </div>
      <h1 className="text-3xl text-center text-orange-600 mt-16">
        Modal Component
      </h1>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={openModal}
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
        >
          Open Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">This is a Modal</h2>
          <p className="mb-4">Here, you can use some information.</p>
          <p className="mb-4 text-orange-600 font-semibold hover:cursor-pointer hover:text-orange-500">
            Example: React Intern Interview at Vrit Technology
          </p>
          <button
            onClick={closeModal}
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500"
          >
            Close Modal
          </button>
        </Modal>
      </div>
    </>
  );
};

export default ModalComponent;
