'use client';
import React, { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ content, onClose }) => {
  const modalRef = useRef(null);

  const handleContainerClick = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <CSSTransition
      in={!!content}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div
        ref={modalRef}
        id="modal-container"
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        onClick={handleContainerClick}
      >
        <div className="bg-white p-4 rounded shadow">
          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
          <div>{content}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
