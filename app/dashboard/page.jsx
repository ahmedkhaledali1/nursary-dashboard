'use client';
import Actions from '@/components/dashboard/actions';
import Header from '@/components/dashboard/header';
import Sidebar from '@/components/sideBar';
import ModalContext from '@/context/ModelContext';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineEdit } from 'react-icons/ai';
import { BsCalendar2Check } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr';
import { TbCalendarDue } from 'react-icons/tb';
import { HiOutlineArchiveBoxXMark } from 'react-icons/hi2';
import Card from '@/components/dashboard/card';

export default function Home() {
  const { isOpen, openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);
  const handleOpenModal = () => {
    const modalContent = 'This is the modal content for SomePage';
    openModal(modalContent);
  };

  const [section, setSection] = useState('My Day');

  const Sections = ({ name, icon }) => {
    return (
      <button
        className={` px-2 text-2xl flex gap-3 ${
          section === name
            ? 'border-b-4 py-2 mb-3 font-semibold border-b-sky-700'
            : ''
        }`}
        onClick={() => setSection(name)}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </button>
    );
  };

  return (
    <div className="pt-4 ">
      <div className="  ">
        <Header />
      </div>
      <div className="flex">
        <div className=" flex-grow p-5">
          <div className=" ">
            <div className="w-fit mx-auto flex gap-10">
              <Sections icon={<GrHomeRounded size={30} />} name={'My Day'} />
              <Sections icon={<TbCalendarDue size={30} />} name={'Due'} />
              <Sections icon={<BsCalendar2Check size={30} />} name={'In'} />
              <Sections icon={<AiOutlineArrowRight size={30} />} name={'Out'} />
              <Sections
                icon={<HiOutlineArchiveBoxXMark size={30} />}
                name={'Absent'}
              />
            </div>
            <div className="w-full mt-10 grid grid-cols-2 gap-6">
              {childrens.map((child) => (
                <Card key={child.name} name={child.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[20rem]">
          <Actions />
        </div>
      </div>
    </div>
  );
}
