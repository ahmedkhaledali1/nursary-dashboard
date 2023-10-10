'use client';
import React, { useEffect, useState } from 'react';
import { SearchBar } from '../rooms/search';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

function ProfileChiled({ selectedChild, childrens, staffs }) {
  const defaultValues = {
    name: selectedChild.name,
    lastName: selectedChild.lastName,
    sex: selectedChild.sex,
    birthDay: selectedChild.birthDay,
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
  }, [selectedChild]);
  // console.log(childrens);
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
              <label htmlFor="sex">Sex</label>
              <input
                name="sex"
                value={form.sex}
                onChange={onChange}
                id="sex"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="birthDay">Birth Day</label>
              <input
                name="birthDay"
                value={form.birthDay}
                onChange={onChange}
                id="birthDay"
                type="date"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="h-fit  w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Other Information</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Allergies</label>
              <textarea
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Medication</label>
              <textarea
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Dietary</label>
              <textarea
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Safe Passphrase</label>
              <textarea
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Notes</label>
              <textarea
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="h-fit w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Funding Reference Numbers</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Extended Hours Ref Number</label>
              <input
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Two Year Old Ref Number</label>
              <input
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="h-fit w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Funding Reference Numbers</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Main Room</label>
              <input
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileChiled;
