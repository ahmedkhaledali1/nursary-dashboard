'use client';
import React, { useEffect, useState } from 'react';
// import ModalContext from '@context/ModelContext';
import Modal from '@/components/model';
import ModalContext from './ModelContext';

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setIsOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === 'modal-container') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const staffs = [
    { name: 'Ahmed', image: '/sidebar/logo.png' },
    { name: 'Tarek', image: '/sidebar/logo.png' },
  ];
  const childrens = [
    { name: 'body', image: '/sidebar/logo.png' },
    { name: 'mohamed', image: '/sidebar/logo.png' },
    { name: 'mohsen', image: '/sidebar/logo.png' },
    { name: 'said', image: '/sidebar/logo.png' },
  ];
  const rooms = [
    {
      name: 'New Room',
      capacity: 20,
      image: '/sidebar/logo.png',
      children: [
        { name: 'body', image: '/sidebar/logo.png' },
        { name: 'mohamed', image: '/sidebar/logo.png' },
      ],
      staff: [{ name: 'Tarek', image: '/sidebar/logo.png' }],
    },
    {
      name: 'Old Room',
      capacity: 30,
      image: '/sidebar/logo.png',
      children: [
        { name: 'mohsen', image: '/sidebar/logo.png' },
        { name: 'said', image: '/sidebar/logo.png' },
      ],
      staff: [{ name: 'Ahmed', image: '/sidebar/logo.png' }],
    },
  ];
  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, childrens, staffs, rooms }}
    >
      {children}
      {isOpen && <Modal content={modalContent} onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
