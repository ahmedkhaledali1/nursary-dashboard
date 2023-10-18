'use client';
import Activities from '@/components/feed/activities';
import Activity from '@/components/feed/feed';
import FilterFeed from '@/components/feed/feed';
import ModalContext from '@/context/ModelContext';
import React, { useContext, useEffect, useState } from 'react';
import { BsActivity, BsFilter } from 'react-icons/bs';
import { Dna } from 'react-loader-spinner';

function Feed() {
  const { openModal } = useContext(ModalContext);
  const handleOpenModal = (e) => {
    e.preventDefault();
    openModal(<FilterFeed />);
  };
  const handleOpenActivityModal = (e) => {
    e.preventDefault();
    openModal(<Activities />);
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
    <div className="w-full h-screen flex flex-col text-[#01233f]">
      <div className="flex justify-between items-center w-full p-3 h-[7rem] pl-20 border-b-2 border-gray-200">
        <h1 className="font-semibold text-3xl ml-4">Feed</h1>
        <div className="flex gap-3 mr-8">
          <button
            onClick={handleOpenModal}
            className="bg-[#225c8b] flex gap-2 rounded-xl text-white p-4 hover:opacity-50"
          >
            <BsFilter size={25} />
            <span>Fillter</span>
          </button>
          <button
            onClick={handleOpenActivityModal}
            className="bg-[#225c8b] flex gap-2 rounded-xl text-white p-4 hover:opacity-50"
          >
            <BsActivity size={25} />
            <span> New Activity</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-300 flex justify-center h-full">
        <div className="w-[75%] bg-white flex flex-col justify-center items-center text-center font-semibold text-xl text-gray-500">
          No Observations
        </div>
      </div>
    </div>
  );
}

export default Feed;
