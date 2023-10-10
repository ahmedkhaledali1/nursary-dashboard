import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { SearchBar } from './search';
import ModalContext from '@/context/ModelContext';

function InviteStaff() {
  const { childrens, staffs } = useContext(ModalContext);

  const [assignStaff, setAssignStaff] = useState([]);
  const [assignChildren, setAssignChildren] = useState([]);
  const [form, setForm] = useState({});
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const RemoveStaff = (name) => {
    if (assignStaff.includes(name)) {
      setAssignStaff(assignStaff.filter((n) => n !== name));
    }
  };
  const RemoveChild = (name) => {
    if (assignChildren.includes(name)) {
      setAssignChildren(assignChildren.filter((n) => n !== name));
    }
  };
  return (
    <div className="p-6 text-[#01233f]">
      <div className="h-fit w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Invite Staff</h1>
        <p className="my-3 px-3">
          Send an email to your staff member with details of how to access
          Nursery Story.
        </p>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Email*</label>
              <input
                type="email"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
          <button className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8">
            Add Child
          </button>
        </form>
      </div>
    </div>
  );
}

export default InviteStaff;
