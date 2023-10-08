import React from 'react';
import { BsActivity, BsFilter } from 'react-icons/bs';

function Feed() {
  return (
    <div className="w-full h-screen flex flex-col text-[#01233f]">
      <div className="flex justify-between items-center w-full p-3 h-[7rem] pl-20 border-b-2 border-gray-200">
        <h1 className="font-semibold text-3xl ml-4">Feed</h1>
        <div className="flex gap-3 mr-8">
          <button className="bg-[#225c8b] flex gap-2 rounded-xl text-white p-4 ">
            <BsFilter size={25} />
            <span>Fillter</span>
          </button>
          <button className="bg-[#225c8b] flex gap-2 rounded-xl text-white p-4 ">
            <BsActivity size={25} />
            <span> New Activity</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-300 flex justify-center h-full">
        <div className="w-[75%] bg-white flex flex-col justify-center items-center text-center font-semibold text-xl text-gray-500">
          No Observations
        </div>
      </div>
    </div>
  );
}

export default Feed;
