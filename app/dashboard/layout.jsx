'use client';
import Sidebar from '@/components/sideBar';
import ModalContext from '@/context/ModelContext';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { BsReverseListColumnsReverse } from 'react-icons/bs';
import { Dna } from 'react-loader-spinner';

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.onload = () => {
        setIsLoading(false);
      };
    }
  }, []);

  if (isLoading == true) {
    return (
      <div className="w-full h-screen flex items-center  justify-center text-center">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  return (
    <main className="flex min-h-screen m-0 ">
      {/* <button
        onClick={handleSidebar}
        className="absolute top-8 left-6 z-20 text-blue blue-text hover:text-cyan-400 font-bold cursor-pointer"
      >
        <BsReverseListColumnsReverse size={40} />
      </button> */}
      <div className="w-[9rem]">
        <Sidebar handleShows={handleSidebar} />
      </div>
      <div className="flex-grow">{children}</div>
    </main>
  );
}
