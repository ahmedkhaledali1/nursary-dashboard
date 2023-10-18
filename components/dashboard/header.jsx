import React, { useContext } from 'react';
import { SearchBar } from './search';
import { AiOutlineFilter } from 'react-icons/ai';
import { PiSquaresFour, PiSquaresFourBold } from 'react-icons/pi';
import ModalContext from '@/context/ModelContext';
import FilterModel from './filter-model';

function Header() {
  const { isOpen, openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);
  console.log(childrens.map((child) => child.name));

  const openFilter = () => {
    openModal(<FilterModel />);
  };
  return (
    <div className="w-full h-[5rem] px-4 pr-10  border-b-2 border-gray-200 flex justify-between items-center">
      <div className="flex gap-2 font-bold  items-center">
        <div className="w-[4rem] profileh  rounded-full text-sm h-[4rem]  bg-gray-600 flex items-center justify-center ">
          TF
        </div>
        <h2 className="text-[#01233f]  text-xl">كيدزولوجي Kidsology Nursery</h2>
      </div>
      <div className="h-10 w-[80px]">
        <SearchBar
          searchingArray={childrens.map((child) => child.name)}
          inputClass={'w-[300px]'}
        />
      </div>
      <div className="flex gap-6 text-cyan-400 cursor-pointer">
        <div className="h-10 hover:opacity-50">
          <AiOutlineFilter onClick={openFilter} size={40} />
        </div>
        <div className="h-10 hover:opacity-50 cursor-pointer">
          <PiSquaresFour size={40} />
        </div>
      </div>
    </div>
  );
}

export default Header;
