'use client';
import React, { useState } from 'react';
// import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { BiMessageAltDetail } from 'react-icons/bi';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaChildReaching } from 'react-icons/fa6';
import {
  BsActivity,
  BsMessenger,
  BsMicrosoftTeams,
  BsReverseListColumnsReverse,
} from 'react-icons/bs';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineViewList, MdOutlineDynamicFeed } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
const SideButton = ({ content, routerButton, child, father, show, icon }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    if (!father) {
      router.push(routerButton);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`
      ${pathname === routerButton ? 'text-white bg-[#11131d] ' : ''}
      ${child && 'px-3'}
      w-full  h-[3.3rem] pl-2 z-10 hover:text-white hover:bg-[#11131d] items-center flex text-start justify-start gap-2  py-2 `}
    >
      <span className="">{icon}</span>
      <div className="flex gap-1">
        <span>{content}</span>
        {father && (
          <span className="text-center">
            {show && <MdOutlineKeyboardArrowUp size={20} />}
            {!show && <MdOutlineKeyboardArrowDown size={20} />}
          </span>
        )}
      </div>
    </button>
  );
};

function Sidebar({ handleShows }) {
  // const { data: session } = useSession();
  const pathname = usePathname();
  console.log(pathname);

  const [showRooms, setShowRooms] = useState(false);

  function handleShow() {
    setShowRooms((prev) => !prev);
  }
  function handleLogout() {
    // signOut();
  }
  return (
    <div className="h-screen blue-bg w-[9rem] text-sm font-extrabold">
      <div
        className={`flex flex-col relative buttonbg text-gray-400 overflow-y-auto scroll-smooth h-[80vh]  
               `}
      >
        <div className={`flex flex-col w-full  `}>
          {/* <div className="flex justify-between p-4">
            <div className="px-4 text-2xl flex gap-5">
              <Image
                width={40}
                height={40}
                src={'/sidebar/logo.png'}
                alt="logo"
              />
              <h1> Rouse Berry</h1>
            </div>
            <div
              onClick={handleShows}
              className="p-2 text-blue hover:text-cyan-400 font-bold cursor-pointer"
            >
              <BsReverseListColumnsReverse size={40} />
            </div>
          </div> */}
          <div className="w-full flex items-center gap-4">
            <Image src={'/site-logo.png'} width={130} height={80} alt="logo" />
          </div>

          <div className="w-full  flex flex-col my-4">
            <SideButton
              content={'Home'}
              routerButton={'/dashboard'}
              icon={<AiOutlineHome size={22} />}
            />
            <div className="w-full">
              <div className="w-full" onClick={handleShow}>
                <SideButton
                  show={showRooms}
                  father
                  icon={<MdOutlineViewList size={22} />}
                  content={'Bookings'}
                />
              </div>
              {showRooms && (
                <div
                  className={`transition-all duration-[4s] ease-in-out transform scale-y-100 $`}
                >
                  <SideButton
                    child
                    content={'Invoicing'}
                    routerButton={'/dashboard/booking/invoicing'}
                  />
                  <SideButton
                    child
                    content={'Settings'}
                    routerButton={'/dashboard/booking/settings/session'}
                  />
                </div>
              )}
            </div>
            <SideButton
              content={'Feed'}
              icon={<MdOutlineDynamicFeed size={22} />}
              routerButton={'/dashboard/feed'}
            />
            <SideButton
              icon={<BsActivity size={22} />}
              content={'Activity'}
              routerButton={'/dashboard/activity'}
            />
            {/* <SideButton
              icon={<BiMessageAltDetail />}
              content={'Messages'}
              routerButton={'/dashboard/message'}
            /> */}
            <SideButton
              icon={<HiOutlineDocumentReport size={22} />}
              content={'Reports'}
              routerButton={'/dashboard/reports'}
            />
            <h3 className=" text-gray-400 w-full px-5">Manage</h3>
            <SideButton
              icon={<SiGoogleclassroom size={22} />}
              content={'Room'}
              routerButton={'/dashboard/rooms'}
            />
            <SideButton
              icon={<FaChildReaching size={22} />}
              content={'Children'}
              routerButton={'/dashboard/children'}
            />
            <SideButton
              icon={<BsMicrosoftTeams size={22} />}
              content={'Staff'}
              routerButton={'/dashboard/staff'}
            />
            <SideButton
              icon={<AiOutlineSetting size={22} />}
              content={'Settings'}
              routerButton={'/dashboard/setting'}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-4 px-1 h-[20vh] ">
        <div className="w-[4rem] profile  rounded-full  font-medium h-[4rem]  bg-gray-600 flex items-center justify-center ">
          TF
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
