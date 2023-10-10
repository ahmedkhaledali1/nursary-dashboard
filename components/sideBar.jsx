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
    router.push(routerButton);
  };
  return (
    <Link
      href={routerButton}
      className={`
      ${pathname === routerButton ? 'hover:text-white hover:bg-[#01233f]' : ''}
      ${child && 'pl-12'}
      w-full text-xl font-medium h-[3.3rem] items-center flex text-start justify-start hover:text-white hover:bg-[#01233f] px-7 py-2 `}
    >
      <span className="pr-2">{icon}</span>
      <span>{content}</span>
      {father && (
        <span className="ml-2 text-center">
          {show && <MdOutlineKeyboardArrowUp size={30} />}
          {!show && <MdOutlineKeyboardArrowDown size={30} />}
        </span>
      )}
    </Link>
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
    <>
      <div
        className={`flex flex-col  w-[13rem] overflow-y-auto scroll-smooth  h-screen 
        blue-bg text-gray-200 font-medium sidetable z-40
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
          <div className="w-full flex items-center gap-4 px-2 mt-3 my-2">
            <div className="w-[4rem] rounded-full boder-[#022542]  h-[4rem] border-4 bg-gray-600 flex items-center justify-center ">
              TF
            </div>
            <h2 className="text-white">Tarek Fouad</h2>
          </div>

          <div className="w-full  flex flex-col my-4 text-sm font-medium ">
            <SideButton
              content={'Home'}
              routerButton={'/dashboard'}
              icon={<AiOutlineHome />}
            />
            <div className="w-full">
              <div className="w-full" onClick={handleShow}>
                <SideButton
                  show={showRooms}
                  father
                  icon={<MdOutlineViewList />}
                  content={'Bookings'}
                  routerButton={'/dashboard'}
                />
              </div>
              {showRooms && (
                <div className="">
                  <SideButton
                    child
                    content={'Invoicing'}
                    routerButton={'/dashboard'}
                  />
                  <SideButton
                    child
                    content={'Settings'}
                    routerButton={'/dashboard'}
                  />
                </div>
              )}
            </div>
            <SideButton
              content={'Feed'}
              icon={<MdOutlineDynamicFeed />}
              routerButton={'/dashboard/feed'}
            />
            <SideButton
              icon={<BsActivity />}
              content={'Activity'}
              routerButton={'/dashboard/activity'}
            />
            <SideButton
              icon={<BiMessageAltDetail />}
              content={'Messages'}
              routerButton={'/dashboard/message'}
            />
            <SideButton
              icon={<HiOutlineDocumentReport />}
              content={'Reports'}
              routerButton={'/dashboard'}
            />
            <h3 className="text-lg text-gray-400 w-full px-5">Manage</h3>
            <SideButton
              icon={<SiGoogleclassroom />}
              content={'Room'}
              routerButton={'/dashboard/rooms'}
            />
            <SideButton
              icon={<FaChildReaching />}
              content={'Children'}
              routerButton={'/dashboard/children'}
            />
            <SideButton
              icon={<BsMicrosoftTeams />}
              content={'Staff'}
              routerButton={'/dashboard/staff'}
            />
            <SideButton
              icon={<AiOutlineSetting />}
              content={'Sttings'}
              routerButton={'/dashboard'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
