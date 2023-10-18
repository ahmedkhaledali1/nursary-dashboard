'use client';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';

function FilterModel() {
  const [isRoomsOpen, setIsRoomOpen] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const rooms = ['New Room', 'Old Room'];
  const [isStaffOpen, setIsStaffOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const Staff = ['Tarek', 'Ahmed'];

  const wrapperRef = useRef(null);
  const staffRef = useRef(null);

  const toggleRooms = (option) => {
    setSelectedRooms((prevState) =>
      prevState.includes(option)
        ? prevState.filter((prevOption) => prevOption !== option)
        : [...prevState, option]
    );
  };
  const toggleStaff = (option) => {
    setSelectedStaff((prevState) =>
      prevState.includes(option)
        ? prevState.filter((prevOption) => prevOption !== option)
        : [...prevState, option]
    );
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsRoomOpen(false);
        // setIsStaffOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (staffRef.current && !staffRef.current.contains(event.target)) {
        // setIsRoomOpen(false);
        setIsStaffOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [staffRef]);
  return (
    <div className="w-[25rem] h-[40vh] font-semibold  ">
      <h2 className="flex gap-2 text-lg mb-4">
        <span className="text-cyan-400">
          <AiOutlineFilter size={35} />
        </span>
        <span> Filter</span>
      </h2>
      <div className="flex flex-1 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="byRoom">By Room</label>
          <div className="relative w-full">
            <input
              className="outline-none z-10 focus:outline-none border-2 rounded p-1 focus:border-2 focus:border-cyan-400"
              type="text"
              value={selectedRooms.join(', ')}
              onClick={() => setIsRoomOpen(true)}
              readOnly
            />
            <div
              ref={wrapperRef}
              className={` absolute bg-white border rounded mt-1  transition-all duration-500 ease-in-out transform ${
                isRoomsOpen
                  ? 'translate-y-0 w-full h-fit opacity-100'
                  : '-translate-y-full h-0 w-0 opacity-0'
              }`}
            >
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="p-1 hover:bg-gray-200 cursor-pointer font-normal flex items-center"
                >
                  <input
                    id={room}
                    type="checkbox"
                    className="cb1"
                    checked={selectedRooms.includes(room)}
                    onChange={() => toggleRooms(room)}
                  />
                  <label htmlFor={room} className="ml-2 w-full">
                    {room}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="byRoom">By Key Person</label>
          <div className="relative w-full">
            <input
              className="outline-none z-10 focus:outline-none border-2 rounded p-1 focus:border-2 focus:border-cyan-400"
              type="text"
              value={selectedStaff.join(', ')}
              onClick={() => setIsStaffOpen(true)}
              readOnly
            />
            <div
              ref={staffRef}
              className={` absolute bg-white border rounded mt-1  transition-all duration-500 ease-in-out transform ${
                isStaffOpen
                  ? 'translate-y-0 w-full h-fit opacity-100'
                  : '-translate-y-full h-0 w-0 opacity-0'
              }`}
            >
              {Staff.map((option, index) => (
                <div
                  key={index}
                  className="p-1 hover:bg-gray-200 cursor-pointer font-normal flex items-center"
                >
                  <input
                    id={option}
                    type="checkbox"
                    className="cb1"
                    checked={selectedStaff.includes(option)}
                    onChange={() => toggleStaff(option)}
                  />
                  <label htmlFor={option} className="ml-2 w-full">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 gap-3 mt-5">
        <div className="flex flex-col gap-1">
          <label className="" htmlFor="byRoom">
            By Key Person
          </label>
          <input
            className="outline-none focus:outline-none border-2 rounded p-1 focus:border-2 focus:border-cyan-400"
            type="date"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="text-center text-white hover:opacity-50 bg-cyan-400 py-2 px-4">
          save
        </div>
      </div>
    </div>
  );
}

export default FilterModel;
