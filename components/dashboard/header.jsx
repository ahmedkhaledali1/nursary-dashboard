import React, { useContext } from 'react';
import { SearchBar } from './search';
import { AiOutlineFilter } from 'react-icons/ai';
import { PiSquaresFour, PiSquaresFourBold } from 'react-icons/pi';
import ModalContext from '@/context/ModelContext';

function Header() {
  const { isOpen, openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);
  console.log(childrens.map((child) => child.name));
  return (
    <div className="w-full h-[7rem] pl-20 border-b-2 border-gray-200 flex justify-between items-center">
      <div className="flex gap-2  items-center">
        <div className="w-[4rem] rounded-full boder-[#022542]  h-[4rem] border-4 bg-gray-600 flex items-center justify-center ">
          TF
        </div>
        <h2 className="text-[#01233f] font-semibold text-xl">tfo</h2>
      </div>
      <div className="flex gap-6 text-[#225c8b] ">
        <div className="h-10">
          <SearchBar
            searchingArray={childrens.map((child) => child.name)}
            inputClass={'w-[200px]'}
          />
        </div>
        <div className="h-10 hover:text-cyan-400">
          <AiOutlineFilter size={40} />
        </div>
        <div className="h-10 hover:text-cyan-400">
          <PiSquaresFour size={40} />
        </div>
      </div>
    </div>
  );
}

export default Header;
