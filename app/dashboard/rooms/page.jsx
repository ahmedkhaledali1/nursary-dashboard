'use client';
import { SearchBar } from '@/components/dashboard/search';
import ProFileRoom from '@/components/rooms/profile-room';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import AddRoomModel from '@/components/rooms/add-room-model';
import ModalContext from '@/context/ModelContext';
import ChildrenRoom from '@/components/rooms/children-room';
import StaffRoom from '@/components/rooms/staff-room';
function RoomsScreen() {
  const [selectedRoom, setSelectedRoom] = useState({});

  const { isOpen, openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);

  const handleOpenModal = () => {
    const modalContent = <AddRoomModel staffs={staffs} childrens={childrens} />;
    openModal(modalContent);
  };

  const [selectedsection, setSelectedSection] = useState('profile');

  return (
    <div className="w-full flex  h-screen ">
      <div className="w-[30%] border-r h-screen overflow-y-auto  ">
        <div className="flex font-medium  text-[#01233f] text-xl gap-3 p-6 border-b items-center h-[5rem]">
          <button onClick={handleOpenModal}>
            <AiOutlinePlus size={35} />
          </button>

          <div>Add Room</div>
        </div>
        <div className="h-[7rem] border-b flex justify-center items-center w-full">
          <div className="h-[3rem]">
            <SearchBar
              setSelectedRoom={setSelectedRoom}
              inputClass={' w-[90%]'}
              searchingArray={rooms.map((room) => room.name)}
            />
          </div>
        </div>
        {rooms.map((room) => (
          <div
            onClick={() => {
              setSelectedRoom(room);
            }}
            key={room.name}
            className={`h-[7rem] p-6  border-b hover:bg-[#5dacecb4] ${
              selectedRoom.name === room.name && 'bg-[#5dacecb4] '
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
                  <h3 className="text-[#01233f] text-xl">{room.name}</h3>
                  <div className="text-sm text-gray-500">
                    {room.children.length} Children, {room.staff.length} Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[70%] h-screen overflow-y-auto">
        {!selectedRoom.name ? (
          <div className="w-full  h-full flex justify-center items-center text-center font-semibold text-xl text-gray-500">
            No room selected
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
                    src={selectedRoom.image}
                    alt="commment photo"
                  />
                  <div className="flex flex-col ">
                    <h3 className="text-[#01233f] text-2xl">
                      {selectedRoom.name}
                    </h3>
                    <div className=" text-gray-500">
                      {selectedRoom.children.length} Children,{' '}
                      {selectedRoom.staff.length} Staff
                    </div>
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
                  <button
                    onClick={() => setSelectedSection('children')}
                    className={` px-2  ${
                      selectedsection === 'children'
                        ? 'border-b-4 py-2 font-semibold border-b-sky-700'
                        : ''
                    }`}
                  >
                    Children
                  </button>
                  <button
                    onClick={() => setSelectedSection('staff')}
                    className={` px-2  ${
                      selectedsection === 'staff'
                        ? 'border-b-4 py-2 font-semibold border-b-sky-700'
                        : ''
                    }`}
                  >
                    Staff
                  </button>
                </div>
              </div>
            </div>
            <div>
              {selectedsection === 'profile' && (
                <ProFileRoom
                  staffs={staffs}
                  childrens={childrens}
                  selectedRoom={selectedRoom}
                />
              )}
              {selectedsection === 'staff' && <StaffRoom />}
              {selectedsection === 'children' && <ChildrenRoom />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomsScreen;
