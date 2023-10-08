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
  const [selectedChild, setselectedChild] = useState({});
  const { isOpen, openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);

  const handleOpenModal = () => {
    const modalContent = (
      <AddChildModel staffs={staffs} childrens={childrens} />
    );
    openModal(modalContent);
  };

  const [selectedsection, setSelectedSection] = useState('profile');
  console.log(childrens);
  return (
    <div className="w-full flex  h-screen">
      <div className="w-[30%] border-r p-10">
        <div className="flex items-start pl-10 text-[#01233f] text-lg gap-3 border-b h-[4rem]">
          <button onClick={handleOpenModal}>
            <AiOutlinePlus size={35} />
          </button>

          <div>Add Child</div>
        </div>
        <div className="h-[7rem] border-b flex justify-center items-center w-full">
          <div className="h-[3rem]">
            <SearchBar
              setselectedChild={setselectedChild}
              inputClass={' w-[350px]'}
              searchingArray={childrens.map((room) => room.name)}
            />
          </div>
        </div>
        {childrens.map((room) => (
          <div
            onClick={() => {
              setselectedChild(room);
            }}
            key={room.name}
            className={`h-[7rem] p-6  border-b hover:bg-[#5dacecb4] ${
              selectedChild.name === room.name && 'bg-[#5dacecb4] '
            }`}
          >
            <div className=" pb-8   w-full ">
              <div className="flex gap-3">
                <Image
                  width={50}
                  height={50}
                  className="rounded-full"
                  src={room.image}
                  alt="commment photo"
                />
                <div className="flex flex-col ">
                  <h3 className="text-[#01233f] text-xl">{room?.name}</h3>
                  {/* <div className="text-sm text-gray-500">
                    {room?.children?.length} Children, {room?.staff?.length}{' '}
                    Staff
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[70%]">
        {!selectedChild.name ? (
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
                    src={selectedChild.image}
                    alt="commment photo"
                  />
                  <div className="flex flex-col ">
                    <h3 className="text-[#01233f] text-2xl">
                      {selectedChild.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={`h-[4rem]   border-b `}>
              <div className=" w-full h-full ">
                <div className="flex gap-5 px-5 items-center h-full text-xl text-[#01233f]  font-semibold">
                  <button
                    onClick={() => setSelectedSection('profile')}
                    className={` px-2  ${
                      selectedsection === 'profile'
                        ? 'border-b-4 py-2 font-semibold border-b-sky-700'
                        : ''
                    }`}
                  >
                    profile
                  </button>
                </div>
              </div>
            </div>
            <div>
              {selectedsection === 'profile' && (
                <ProfileChiled
                  staffs={staffs}
                  childrens={childrens}
                  selectedChild={selectedChild}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChildrenScreen;
