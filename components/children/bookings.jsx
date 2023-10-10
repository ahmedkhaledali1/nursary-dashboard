import React from 'react';

function Bookings() {
  return (
    <div className="flex flex-col p-3 gap-3 text-[#01233f]">
      <div className="flex gap-7 items-center p-3">
        <h2 className="font-medium text-xl">Bookings</h2>
        <input
          className="bg-gray-100 p-2 rounded-lg outline-none"
          type="date"
        />
      </div>
    </div>
  );
}

export default Bookings;
