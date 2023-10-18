'use client';
import Image from 'next/image';
import React, { useState } from 'react';

function Card({ name, child, onToggle, selectedCards }) {
  const handleClick = () => {
    onToggle(child);
  };

  return (
    <div
      onClick={handleClick}
      className={`h-[10rem] p-4  ${
        selectedCards.includes(child) ? 'bg-sky-300' : 'bg-[#f1f3f8]'
      } `}
    >
      <div className="border-b-2 pb-3 border- w-full ">
        <div className="flex gap-2 ">
          <Image
            width={60}
            height={60}
            className="rounded-full border-4 border-[#c5c7c9]"
            src={`/sidebar/logo.png`}
            alt="commment photo"
          />
          <div className="flex flex-col ">
            <h3 className="text-[#01233f]  font-semibold">{name}</h3>
            <div className="text-sm text-gray-500"> month, week</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-semibold pt-3 text-gray-500 items-center text-center w-full">
        No Bookings Available
      </div>
    </div>
  );
}

export default Card;
