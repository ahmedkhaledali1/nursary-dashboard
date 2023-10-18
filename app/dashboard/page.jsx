'use client';
import Actions from '@/components/dashboard/actions';
import Header from '@/components/dashboard/header';
import Sidebar from '@/components/sideBar';
import ModalContext from '@/context/ModelContext';
import Image from 'next/image';
import { useContext, useState } from 'react';
import {
  AiOutlineArrowRight,
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
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

  const Sections = ({ name, icon, end, className, bgActive }) => {
    return (
      <button
        className={`flex gap-2  border-b-[4px]   ${className} active:opacity-20 transition-opacity duration-[.25s] font-medium items-center  px-3 py-1 ${
          section === name ? `${bgActive}` : 'bg-[#f1f3f8]'
        }`}
        onClick={() => setSection(name)}
      >
        <span>{icon}</span>
        <span>{name}</span>
        <div className="text-2xl font-bold">
          0{end && <span className="opacity-50">/0</span>}
        </div>
      </button>
    );
  };

  const [selectedCards, setSelectedCards] = useState([]);
  console.log(selectedCards);
  const handleToggle = (id) => {
    setSelectedCards((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((cardId) => cardId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };
  const checkAll = () => {
    setSelectedCards(childrens);
  };

  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <div className="flex text-[#01233f]">
        <div className=" flex-grow p-5">
          <div className="p-1 ">
            <div className="w-full  flex justify-stretch gap-3 pt-4">
              <Sections
                icon={<AiOutlineHome size={20} />}
                name={'My Day'}
                end
                className={'border-[#12aed2]'}
                bgActive={'bg-[#12aed280]'}
              />
              <Sections
                icon={<AiOutlineUnorderedList size={20} />}
                name={'Due'}
                className={'border-[#3a5e6d]'}
                bgActive={'bg-[#d9dde4]'}
              />
              <Sections
                icon={<AiOutlineCheckCircle size={20} />}
                end
                name={'In'}
                className={'border-[#afdc5c]'}
                bgActive={'bg-[#afdc5c80]'}
              />
              <Sections
                icon={<AiOutlineArrowRight size={20} />}
                name={'Out'}
                className={'border-[#ff9f8a]'}
                bgActive={'bg-[#ff9f8a80]'}
              />
              <Sections
                icon={<HiOutlineArchiveBoxXMark size={20} />}
                name={'Absent'}
                className={'border-[#fff282]'}
                bgActive={'bg-[#fff28280]'}
              />
            </div>
            {section == 'My Day' ? (
              <div className="w-full mt-5 grid grid-cols-2 gap-3">
                {childrens.map((child) => (
                  <Card
                    selectedCards={selectedCards}
                    key={child.name}
                    name={child.name}
                    child={child}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full h-[50vh] flex justify-center items-center text-center font-bold text-gray-500">
                <div>Nothing Yet</div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[20rem]">
          <Actions
            checkAll={checkAll}
            selectedChildren={selectedCards}
            childrens={childrens}
          />
        </div>
      </div>
    </div>
  );
}
