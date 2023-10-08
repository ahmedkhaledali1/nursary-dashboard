'use client';
import Sidebar from '@/components/sideBar';
import ModalContext from '@/context/ModelContext';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { BsReverseListColumnsReverse } from 'react-icons/bs';

export default function Layout({ children }) {
  const { openModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    const modalContent = 'This is the modal content for SomePage';
    openModal(modalContent);
  };
  const [showSidebar, setShpowSidebar] = useState(false);
  const handleSidebar = () => {
    setShpowSidebar(!showSidebar);
  };
  return (
    <main className=" relative min-h-screen m-0 ">
      <button
        onClick={handleSidebar}
        className="absolute top-8 left-6 z-20 text-blue blue-text hover:text-cyan-400 font-bold cursor-pointer"
      >
        <BsReverseListColumnsReverse size={40} />
      </button>
      {showSidebar && <Sidebar handleShows={handleSidebar} />}
      <div>{children}</div>
    </main>
  );
}
