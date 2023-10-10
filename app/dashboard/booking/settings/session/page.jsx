'use client';
import { SearchBar } from '@/components/dashboard/search';
import AddSessionModel from '@/components/settings/add-session-model';
import EditSessionModel from '@/components/settings/edit-session-model';
import ModalContext from '@/context/ModelContext';
import React, { useContext, useEffect, useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlinePlus,
  AiOutlineSearch,
} from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TbRadioactive, TbRadioactiveOff } from 'react-icons/tb';

function Sessions() {
  const [sessions, setSessions] = useState([
    {
      name: 'Session Name',
      acronym: 'Acronym',
      from: '10:00',
      to: '10:30',

      underOne: '',
      oneToTwo: '',
      twoToThree: '',
      overThree: '',
    },
    {
      name: 'Session2 Name',
      acronym: 'Acronym2',
      from: '10:00',
      to: '10:30',

      underOne: '',
      oneToTwo: '',
      twoToThree: '',
      overThree: '',
    },
    {
      name: 'Session Name3',
      acronym: 'Acronym3',
      from: '10:00',
      to: '10:30',
      underOne: '',
      oneToTwo: '',
      twoToThree: '',
      overThree: '',
    },
  ]);
  const { openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);
  //   console.log(sessions);
  const handleOpenModal = () => {
    const modalContent = <AddSessionModel sessions setSessions />;
    openModal(
      <AddSessionModel sessions={sessions} setSessions={setSessions} />
    );
  };
  const handleOpenEditModal = () => {
    // const modalContent = <EditSessionModel sessions setSessions />;
    openModal(
      <EditSessionModel
        sessions={sessions}
        setSessions={setSessions}
        selectedSession={selectedSession}
      />
    );
  };

  const [selectedSession, setSelectedSession] = useState(null);
  useEffect(() => {}, [sessions]);

  return (
    <div className="p-6 text-[#01233f] flex gap-4">
      <div className="h-[60vh] overflow-y-auto w-[22rem] border rounded-xl p-4">
        <div className="flex gap-3 items-center border-b pb-4">
          <AiOutlinePlus onClick={handleOpenModal} size={40} />
          <h1 className="font-semibold text-xl"> Add Children Session</h1>
        </div>

        <div className="h-[60px] py-3 border-b">
          <div className={` h-full flex gap-2 items-center `}>
            <div className="text-[#225c8b] ">
              <AiOutlineSearch size={40} />
            </div>

            <input
              className={` w-[90%] outline-none border-2 rounded-lg hover:shadow focus:shadow border-gray-200 h-full  p-3 bg-inherit text-2xl `}
            />
          </div>
        </div>
        <div className="flex h-[90px] border-b">
          <div className="border-x h-full w-full flex items-center justify-center text-center ">
            Active
          </div>
          <div className="border-r h-full w-full flex items-center justify-center text-center ">
            Inactive
          </div>
          <div className="border-r h-full w-full flex items-center justify-center text-center ">
            All
          </div>
        </div>
        <div className="h-[40vh] ">
          {sessions.map((session) => (
            <div
              onClick={() => setSelectedSession(session)}
              key={session.name}
              className={`flex flex-col gap-2 p-4 border-b hover:bg-sky-400 ${
                selectedSession?.name == session.name && 'bg-sky-400'
              }`}
            >
              <div className="flex gap-1 font-medium">
                <div>{session.name}</div>
                <div>-</div>
                <div>{session.acronym}</div>
              </div>
              <div className="flex gap-1 text-gray-500">
                <div>{session.from}</div>
                <div>-</div>
                <div>{session.to}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedSession && (
        <div className="h-[70vh] w-[42rem] border rounded-xl p-4">
          <div className="flex gap-3 items-center justify-between border-b pb-4">
            <h1 className="font-semibold text-lg"> A Children Session</h1>
            <div className="flex gap-3">
              <div>
                <AiOutlineEdit onClick={handleOpenEditModal} size={30} />
              </div>
              <div>
                <TbRadioactive size={30} />
              </div>
              <div>
                <RiDeleteBin5Line
                  onClick={() =>
                    setSessions(
                      sessions.filter((session) => session !== selectedSession),
                      setSelectedSession(null)
                    )
                  }
                  size={30}
                />
              </div>
            </div>
          </div>

          <div className="overflow-y-auto h-[58vh] flex flex-col gap-3">
            <div className="flex justify-around text-center border-b p-3">
              <div className="flex flex-col gap-3">
                <p className="font-medium">
                  Display{' '}
                  <span className="text-gray-500 font-normal">
                    (Bookings Calendar)
                  </span>{' '}
                </p>
                <p>{selectedSession.name}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium">Acronym</p>
                <p>{selectedSession.acronym}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium">Assigned</p>
                <p>0</p>
              </div>
            </div>
            <div className="flex justify-around text-center border-b p-3">
              <div className="flex flex-col gap-3">
                <p className="font-medium">from</p>
                <p>{selectedSession.from}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium">to</p>
                <p>{selectedSession.to}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-2">
              <h2 className="font-medium"> Session Fees</h2>
              <h4 className="self-end font-medium">Price per Hour</h4>
              <div className="flex justify-between">
                <div>Under 1 years old</div>
                <div className="mx-9">
                  £
                  {selectedSession.underOne != '' ? (
                    <span>{selectedSession.underOne}</span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div>1 up to 2 years old</div>
                <div className="mx-9">
                  £
                  {selectedSession.oneToTwo != '' ? (
                    <span>{selectedSession.oneToTwo}</span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div>2 up to 3 years old</div>
                <div className="mx-9">
                  £
                  {selectedSession.twoToThree != '' ? (
                    <span>{selectedSession.twoToThree}</span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div>+3 years old</div>
                <div className="mx-9">
                  £
                  {selectedSession.overThree != '' ? (
                    <span>{selectedSession.overThree}</span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sessions;
