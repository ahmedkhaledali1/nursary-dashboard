'use client';
import AddFundingModel from '@/components/settings/add-funding-model';
import EditFundingModel from '@/components/settings/edit-funding-model';
import ModalContext from '@/context/ModelContext';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Rings } from 'react-loader-spinner';

function Extras() {
  const [funding, setFunding] = useState([
    {
      title: 'funding title',
      from: '1/1/2001',
      rate: '4',
    },
    {
      title: 'funding title2',
      from: '1/1/2002',
      rate: '6',
    },
    {
      title: 'funding title3',
      from: '1/1/2004',
      rate: '9',
    },
  ]);
  const [selectedFunding, setSelectedFunding] = useState(null);

  const { openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);
  //   console.log(sessions);
  const handleOpenModal = () => {
    // const modalContent = <AddSessionModel sessions setSessions />;
    openModal(<AddFundingModel fundings={funding} setFundings={setFunding} />);
  };
  const handleOpenEditModal = () => {
    // const modalContent = <AddSessionModel sessions setSessions />;
    openModal(
      <EditFundingModel
        fundings={funding}
        setFundings={setFunding}
        selectedFunding={selectedFunding}
      />
    );
  };

  return (
    <div className="p-6 text-[#01233f] flex gap-4">
      <div className="h-[60vh] overflow-y-auto w-[22rem] border rounded-xl p-4">
        <div className="flex gap-3 items-center border-b pb-4">
          <AiOutlinePlus onClick={handleOpenModal} size={40} />
          <h1 className="font-semibold text-xl"> Add Funding Grant</h1>
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

        <div className="h-[40vh] ">
          {funding.map((fund) => (
            <div
              onClick={() => setSelectedFunding(fund)}
              key={fund.title}
              className={`flex flex-col gap-2 p-4 border-b hover:bg-sky-400 ${
                selectedFunding?.title == fund.title && 'bg-sky-400'
              }`}
            >
              <div className="flex gap-1 font-medium">
                <div>{fund.title}</div>
                <div>-</div>
                <div>{fund.from}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedFunding && (
        <div className="h-[70vh] w-[42rem] border rounded-xl p-4">
          <div className="flex gap-3 items-center justify-between border-b pb-4">
            <h1 className="font-semibold text-lg"> {selectedFunding.title}</h1>
            <div className="flex gap-3">
              <div>
                <AiOutlineEdit onClick={handleOpenEditModal} size={30} />
              </div>
              <div>
                <RiDeleteBin5Line
                  onClick={() =>
                    setFunding(
                      funding.filter((fund) => fund !== selectedFunding),
                      setSelectedFunding(null)
                    )
                  }
                  size={30}
                />
              </div>
            </div>
          </div>

          <div className="overflow-y-auto h-[58vh] flex flex-col gap-3">
            <div className="flex flex-col text-lg  border-b p-3">
              <div className="flex flex-col  gap-3">
                <p className="font-medium">Title</p>
                <p>{selectedFunding.title}</p>
              </div>
              <div className="flex  text-lg justify-around text-center border-b p-3">
                <div className="flex flex-col gap-3">
                  <p className="font-medium">from</p>
                  <p>{selectedFunding.from}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-medium">Hourly Rate</p>
                  <p>{selectedFunding.rate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Extras;
