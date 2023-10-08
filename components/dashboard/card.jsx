import Image from 'next/image';
import React from 'react';

function Card({ name }) {
  return (
    <div className="h-[15rem] p-6 rounded-xl bg-gray-200">
      <div className="border-b-2 pb-8 border-gray-300 border- w-full ">
        <div className="flex gap-3">
          <Image
            width={80}
            height={80}
            className="rounded-full"
            src={`/sidebar/logo.png`}
            alt="commment photo"
          />
          <div className="flex flex-col ">
            <h3 className="text-[#01233f] text-xl">{name}</h3>
            <div className="text-sm text-gray-500"> month, week</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xl text-gray-500 items-center text-center w-full">
        No Bookings Available
      </div>
    </div>
  );
}

export default Card;
