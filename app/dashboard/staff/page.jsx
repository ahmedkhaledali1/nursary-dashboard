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
import ProfileStaff from '@/components/staff/profile-staff';
import AddStaffModel from '@/components/staff/add-staff-model';
import StaffFeed from '@/components/staff/staff-feed';
function StaffScreen() {
  const [selectedStaff, setselectedStaff] = useState({});
  const { isOpen, openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);

  const handleOpenModal = () => {
    const modalContent = (
      <AddStaffModel staffs={staffs} childrens={childrens} />
    );
    openModal(modalContent);
  };

  const [selectedsection, setSelectedSection] = useState('profile');
  console.log(childrens);
  return (
    <div className="w-full flex  h-screen">
      <div className="w-[25%] border-r  ">
        <div className="flex items-center p-5 text-[#01233f] text-xl font-medium gap-3 border-b h-[4rem]">
          <button onClick={handleOpenModal}>
            <AiOutlinePlus size={35} />
          </button>

          <div>Add Staff</div>
        </div>
        <div className="h-[6rem] border-b flex justify-center items-center w-full">
          <div className="h-[2.5rem]">
            <SearchBar
              setselectedStaff={setselectedStaff}
              inputClass={'w-[90%]'}
              searchingArray={staffs.map((staff) => staff.name)}
            />
          </div>
        </div>
        {staffs.map((staff) => (
          <div
            onClick={() => {
              setselectedStaff(staff);
            }}
            key={staff.name}
            className={`h-[7rem] p-6  border-b hover:bg-[#5dacecb4] ${
              selectedStaff.name === staff.name && 'bg-[#5dacecb4] '
            }`}
          >
            <div className=" pb-8   w-full ">
              <div className="flex gap-3">
                <Image
                  width={50}
                  height={50}
                  className="rounded-full"
                  src={staff.image}
                  alt="commment photo"
                />
                <div className="flex flex-col ">
                  <h3 className="text-[#01233f] text-xl">{staff?.name}</h3>
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
      <div className="w-[75%] h-screen overflow-y-auto">
        {!selectedStaff.name ? (
          <div className="w-full  h-full flex justify-center items-center text-center font-semibold text-xl text-gray-500">
            No Staff selected
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
                    src={selectedStaff.image}
                    alt="commment photo"
                  />
                  <div className="flex flex-col ">
                    <h3 className="text-[#01233f] text-2xl">
                      {selectedStaff.name}
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
                </div>
              </div>
            </div>
            <div>
              {selectedsection === 'profile' && (
                <ProfileStaff
                  staffs={staffs}
                  childrens={childrens}
                  selectedStaff={selectedStaff}
                />
              )}
              {selectedsection === 'feed' && <StaffFeed />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffScreen;
