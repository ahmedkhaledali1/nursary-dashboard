'use client';
import { SearchBar } from '@/components/dashboard/search';
import ProFileRoom from '@/components/rooms/profile-room';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import AddChildModel from '@/components/children/add-child-model';
import ModalContext from '@/context/ModelContext';
import ChildrenRoom from '@/components/rooms/children-room';
import StaffRoom from '@/components/rooms/staff-room';
import ProfileChiled from '@/components/children/profile-child';
function ChildrenScreen() {
  const [selectedSection, setselectedSection] = useState('');
  const { isOpen, openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);

  const handleOpenModal = () => {
    const modalContent = (
      <AddChildModel staffs={staffs} childrens={childrens} />
    );
    openModal(modalContent);
  };

  console.log(childrens);
  return (
    <div className="w-full flex  h-screen">
      <div className="w-[30%] flex flex-col border-r p-10">
        <h1 className="font-semibold self-center text-center text-3xl ml-4 text-[#01233f]">
          Messages
        </h1>
        <div className="h-[7rem] mt-1 border-b flex justify-center items-center w-full">
          <div className="h-[3rem]">
            <SearchBar
              inputClass={' w-[350px]'}
              searchingArray={staffs.map((staff) => staff.name)}
            />
          </div>
        </div>
      </div>
      <div className="w-[70%]">
        <div className="flex items-center px-3 text-[#01233f] text-lg border-b  h-[6rem]">
          <h1 className=" text-3xl ml-4 ">{selectedSection}</h1>
        </div>
        <div className="w-full  h-full flex justify-center items-center text-center font-semibold text-xl text-gray-500">
          Nothing yet
        </div>
        {/* {!selectedSection.name ? (
          <div className="w-full  h-full flex justify-center items-center text-center font-semibold text-xl text-gray-500">
            No Child selected
          </div>
        ) : (
          <div className="w-full  h-full">
            <div className={`h-[10rem] p-6  border-b `}>
              <div className=" py-8   w-full ">
                <div className="flex gap-3">
                  <Image
                    width={80}
                    height={80}
                    className="rounded-full"
                    src={selectedSection.image}
                    alt="commment photo"
                  />
                  <div className="flex flex-col ">
                    <h3 className="text-[#01233f] text-2xl">
                      {selectedSection.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
     

          </div>
        )} */}
      </div>
    </div>
  );
}

export default ChildrenScreen;
