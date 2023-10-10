'use client';
import ModalContext from '@/context/ModelContext';
import React, { useContext } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import FilterFeedChild from './filter-feed-child';

function ChildFeed() {
  const { openModal } = useContext(ModalContext);
  const handleOpenModal = () => {
    openModal(<FilterFeedChild />);
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="self-end">
        <div className="p-5">
          <button
            onClick={handleOpenModal}
            className="bg-[#225c8b] flex gap-2 rounded-xl text-white p-4 w-full "
          >
            <AiOutlineFilter size={23} />
            <span>Fliter</span>
          </button>
        </div>
      </div>
      <div className="h-full my-auto w-full flex justify-center items-center font-semibold text-xl text-gray-500">
        <div className="text-center  ">No Observations</div>
      </div>
    </div>
  );
}

export default ChildFeed;
