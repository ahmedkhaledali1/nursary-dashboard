import React from 'react';

export default function StaffRoom() {
  return (
    <div className="w-full  h-[50vh] flex flex-col justify-center items-center text-center font-semibold text-xl text-gray-500">
      <p>There are not any staff in this room yet</p>
      <div className="w-[30%]">
        <button className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8">
          Add staff
        </button>
      </div>
    </div>
  );
}
