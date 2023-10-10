'use client';
import React, { useContext, useEffect, useState } from 'react';
import { SearchBar } from '../rooms/search';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import ModalContext from '@/context/ModelContext';
import InviteStaff from './invite-staff';

function ProfileStaff({ selectedStaff, childrens, staffs }) {
  const defaultValues = {
    name: selectedStaff.name,
    lastName: selectedStaff.lastName,
    email: selectedStaff.email,
    contactNumber: selectedStaff.contactNumber,
  };
  const [assignStaff, setAssignStaff] = useState([]);
  const [assignChildren, setAssignChildren] = useState([]);
  const [form, setForm] = useState({});
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // const RemoveStaff = (name) => {
  //   if (assignStaff.includes(name)) {
  //     setAssignStaff(assignStaff.filter((n) => n !== name));
  //   }
  // };
  // const RemoveChild = (name) => {
  //   if (assignChildren.includes(name)) {
  //     setAssignChildren(assignChildren.filter((n) => n !== name));
  //   }
  // };
  useEffect(() => {
    // setAssignChildren(selectedRoom.children.map((child) => child.name));
    // setAssignStaff(selectedRoom.staff.map((staff) => staff.name));
    setForm(defaultValues);
  }, [selectedStaff]);
  const { openModal } = useContext(ModalContext);

  const handleOpenModal = (e) => {
    e.preventDefault();
    const modalContent = <InviteStaff />;
    openModal(modalContent);
  };
  return (
    <div className="p-6 flex flex-col gap-4 text-[#01233f]">
      <div className="h-fit w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Basic Information</h1>

        <form className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                id="name"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                id="lastName"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="email">email</label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                id="email"
                type="email"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                name="contactNumber"
                value={form.contactNumber}
                onChange={onChange}
                id="contactNumber"
                type="date"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="h-fit w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Setting Information</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Room(s)</label>
              <input
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="h-fit w-[30rem] border rounded-xl p-4">
        <div className=" w-full flex flex-col gap-1">
          <label className="font-semibold text-xl">Key Children</label>
          <div className="flex items-center gap-2">
            {
              <SearchBar
                assign={assignChildren}
                setAssign={setAssignChildren}
                searchingArray={childrens.map((room) => room.name)}
                noIcon
              />
            }
          </div>
        </div>
        {assignChildren.length > 0 && (
          <div className="border-2 text-xs p-2 text-gray-50 text-w w-full flex gap-2">
            {assignChildren.map((name, index) => (
              <div
                key={index}
                className=" flex gap-[3px] p-1 items-center bg-[#01233f] rounded-full"
              >
                <div>{name}</div>
                <AiOutlineClose onClick={() => RemoveChild(name)} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="h-fit w-[30rem] border rounded-xl p-4">
        <div className="flex justify-between p-3">
          <h1 className="font-semibold text-xl">Account</h1>
          <h1 className="text-gray-500">Not Signed Up</h1>
        </div>

        <form className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <button
                onClick={handleOpenModal}
                className="w-full p-3 font-medium rounded-lg bg-gray-100 hover:bg-gray-300"
              >
                Invite
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileStaff;
