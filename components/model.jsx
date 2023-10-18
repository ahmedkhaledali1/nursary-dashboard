import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ content, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsOpen(!!content);
  }, [content]);

  const handleContainerClick = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      id="modal-container"
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
      onClick={handleContainerClick}
    >
      <div
        className={`bg-white p-4 rounded shadow transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <button onClick={onClose}>
          <AiOutlineClose />
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
