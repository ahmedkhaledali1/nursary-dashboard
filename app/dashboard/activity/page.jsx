'use client';
import { SearchBar } from '@/components/dashboard/search';
import ProFileRoom from '@/components/rooms/profile-room';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import AddChildModel from '@/components/children/add-child-model';
import ModalContext from '@/context/ModelContext';
import ChildrenRoom from '@/components/rooms/children-room';
import StaffRoom from '@/components/rooms/staff-room';
import ProfileChiled from '@/components/children/profile-child';
import { Dna } from 'react-loader-spinner';
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
    <div className="w-full flex  h-screen">
      <div className="w-[25%] border-r">
        <div className="flex items-start p-5 text-[#01233f] text-lg gap-3 border-b h-[4rem]">
          <h1 className="font-semibold text-xl text-[#01233f]">Activity</h1>
        </div>
        <div
          onClick={() => {
            setselectedSection('pending-approval');
          }}
          className={`h-fit p-3 font-medium  border-b hover:bg-[#5dacecb4] ${
            selectedSection === 'pending-approval' && 'bg-[#5dacecb4] '
          }`}
        >
          <div className="  w-full ">
            <div className="flex gap-3">
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={'/sidebar/logo.png'}
                alt="commment photo"
              />
              <div className="flex flex-col ">
                <h3 className="text-[#01233f] text-xl">Pending Approval</h3>
                {/* <div className="text-sm text-gray-500">
                    {room?.children?.length} Children, {room?.staff?.length}{' '}
                    Staff
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setselectedSection('Approved');
          }}
          className={`h-fit p-3 font-medium   border-b hover:bg-[#5dacecb4] ${
            selectedSection === 'Approved' && 'bg-[#5dacecb4] '
          }`}
        >
          <div className=" w-full ">
            <div className="flex gap-3">
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={'/sidebar/logo.png'}
                alt="commment photo"
              />
              <div className="flex flex-col ">
                <h3 className="text-[#01233f] text-xl">Approved</h3>
                {/* <div className="text-sm text-gray-500">
                    {room?.children?.length} Children, {room?.staff?.length}{' '}
                    Staff
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setselectedSection('Drafts');
          }}
          className={`h-fit p-3 font-medium  border-b hover:bg-[#5dacecb4] ${
            selectedSection === 'Drafts' && 'bg-[#5dacecb4] '
          }`}
        >
          <div className="  w-full ">
            <div className="flex gap-3">
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={'/sidebar/logo.png'}
                alt="commment photo"
              />
              <div className="flex flex-col ">
                <h3 className="text-[#01233f] text-xl">Drafts</h3>
                {/* <div className="text-sm text-gray-500">
                    {room?.children?.length} Children, {room?.staff?.length}{' '}
                    Staff
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setselectedSection('Deleted');
          }}
          className={`h-fit p-3 font-medium  border-b hover:bg-[#5dacecb4] ${
            selectedSection === 'Deleted' && 'bg-[#5dacecb4] '
          }`}
        >
          <div className="  w-full ">
            <div className="flex gap-3">
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={'/sidebar/logo.png'}
                alt="commment photo"
              />
              <div className="flex flex-col ">
                <h3 className="text-[#01233f] text-xl">Deleted</h3>
                {/* <div className="text-sm text-gray-500">
                    {room?.children?.length} Children, {room?.staff?.length}{' '}
                    Staff
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[75%]">
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
