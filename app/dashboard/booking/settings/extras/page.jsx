'use client';
import { SearchBar } from '@/components/dashboard/search';
import AddExtrasModel from '@/components/settings/add-extras-model';
import AddSessionModel from '@/components/settings/add-session-model';
import EditExtrasModel from '@/components/settings/edit-extras-model';
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

function Extras() {
  const [extrases, setExtrases] = useState([
    {
      name: 'extras Name',
      price: '3',
    },
    {
      name: 'extras Name2',
      price: '6',
    },
    {
      name: 'extras Name3',
      price: '9',
    },
  ]);
  const [selectedExtras, setSelectedExtras] = useState(null);

  const { openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);
  //   console.log(sessions);
  const handleOpenModal = () => {
    // const modalContent = <AddSessionModel sessions setSessions />;
    openModal(<AddExtrasModel extrases={extrases} setExtrases={setExtrases} />);
  };
  const handleOpenEditModal = () => {
    // const modalContent = <EditSessionModel sessions setSessions />;
    openModal(
      <EditExtrasModel
        extrases={extrases}
        setExtrases={setExtrases}
        selectedExtras={selectedExtras}
      />
    );
  };

  useEffect(() => {}, [extrases]);

  return (
    <div className="p-6 text-[#01233f] flex gap-4">
      <div className="h-[60vh] overflow-y-auto w-[22rem] border rounded-xl p-4">
        <div className="flex gap-3 items-center border-b pb-4">
          <AiOutlinePlus onClick={handleOpenModal} size={40} />
          <h1 className="font-semibold text-xl"> Add Extra Purchase</h1>
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
          {extrases.map((Extras) => (
            <div
              onClick={() => setSelectedExtras(Extras)}
              key={extrases.name}
              className={`flex flex-col gap-2 p-4 border-b hover:bg-sky-400 ${
                selectedExtras?.name == Extras.name && 'bg-sky-400'
              }`}
            >
              <div className="flex gap-1 font-medium">
                <div>{Extras.name}</div>
                <div>-</div>
                <div>{Extras.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedExtras && (
        <div className="h-[70vh] w-[42rem] border rounded-xl p-4">
          <div className="flex gap-3 items-center justify-between border-b pb-4">
            <h1 className="font-semibold text-lg"> {selectedExtras.name}</h1>
            <div className="flex gap-3">
              <div>
                <AiOutlineEdit onClick={handleOpenEditModal} size={30} />
              </div>
              <div>
                <RiDeleteBin5Line
                  onClick={() =>
                    setExtrases(
                      extrases.filter((extra) => extra !== selectedExtras),
                      setSelectedExtras(null)
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
                <p className="font-medium">name</p>
                <p>{selectedExtras.name}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium">price</p>
                <p>{selectedExtras.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Extras;
