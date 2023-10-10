import React from 'react';

function Invoicing() {
  return (
    <div className="w-full h-screen flex flex-col text-[#01233f]">
      <div className="flex justify-between items-center w-full p-5 h-[4rem] border-b-2 border-gray-200">
        <h1 className="font-semibold text-3xl ">Invoicing</h1>
      </div>
      <div className=" bg-white flex flex-col p-7 font-semibold ">
        <h3 className="text-gray-600 text-2xl mb-5 ">
          Sorry, we are unable to display invoicing.
        </h3>
        <p className="text-[#01233f] font-medium  max-w-[60%]">
          Please ensure you have setup your setting fully in order to generate
          invoices. If you are still having difficulties, please contact
          customer support.
        </p>
        <h5 className="text-[#01233f] my-5 ">Add Academic Year</h5>
        <p className="text-[#01233f] font-medium max-w-[60%]">
          Add an academic year to your attendance calendar to enable invoicing
          for bookings that fall within its date range.
        </p>
      </div>
    </div>
  );
}

export default Invoicing;
