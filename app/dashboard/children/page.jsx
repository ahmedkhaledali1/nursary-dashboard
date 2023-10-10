'use client';
import { SearchBar } from '@/components/dashboard/search';
import ProFileRoom from '@/components/rooms/profile-room';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import AddChildModel from '@/components/children/add-child-model';
import ModalContext from '@/context/ModelContext';

import ProfileChiled from '@/components/children/profile-child';
import ChildFeed from '@/components/children/child-feed';
import Bookings from '@/components/children/bookings';
import LearningJourney from '@/components/children/learning-journey';
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
    <div className="w-full flex h-screen">
      <div className="w-[25%] border-r ">
        <div className="flex font-medium items-center  text-[#01233f] text-xl gap-3 p-5 border-b h-[4rem]">
          <button onClick={handleOpenModal}>
            <AiOutlinePlus size={35} />
          </button>

          <div>Add Child</div>
        </div>
        <div className="h-[6rem] border-b flex justify-center items-center w-full">
          <div className="h-[2.5rem]">
            <SearchBar
              setselectedChild={setselectedChild}
              inputClass={' w-[90%]'}
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
      <div className="w-[75%]">
        {!selectedChild.name ? (
          <div className="w-full  h-screen overflow-y-auto flex justify-center items-center text-center font-semibold text-xl text-gray-500">
            No Child selected
          </div>
        ) : (
          <div className="w-full  h-screen overflow-y-auto">
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
                  <button
                    onClick={() => setSelectedSection('feed')}
                    className={` px-2  ${
                      selectedsection === 'feed'
                        ? 'border-b-4 py-2 font-semibold border-b-sky-700'
                        : ''
                    }`}
                  >
                    Feed
                  </button>
                  <button
                    onClick={() => setSelectedSection('bookings')}
                    className={` px-2  ${
                      selectedsection === 'bookings'
                        ? 'border-b-4 py-2 font-semibold border-b-sky-700'
                        : ''
                    }`}
                  >
                    Bookings
                  </button>
                  <button
                    onClick={() => setSelectedSection('learningJourney')}
                    className={` px-2  ${
                      selectedsection === 'learningJourney'
                        ? 'border-b-4 py-2 font-semibold border-b-sky-700'
                        : ''
                    }`}
                  >
                    Learning Journey
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[67vh]">
              {selectedsection === 'profile' && (
                <ProfileChiled
                  staffs={staffs}
                  childrens={childrens}
                  selectedChild={selectedChild}
                />
              )}
              {selectedsection === 'feed' && <ChildFeed />}
              {selectedsection === 'bookings' && <Bookings />}
              {selectedsection === 'learningJourney' && <LearningJourney />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChildrenScreen;
