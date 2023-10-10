import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { SearchBar } from './search';
import ModalContext from '@/context/ModelContext';

function AddChildModel() {
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
      <div className="h-[70vh] overflow-y-auto w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl"> Child Details</h1>
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
              <label htmlFor="name">last Name</label>
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
              <label htmlFor="sex">sex</label>
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
              <label htmlFor="birthDay">birth Day</label>
              <input
                name="birthDay"
                value={form.birthDay}
                onChange={onChange}
                id="birthDay"
                type="date"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
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
          </div>

          <button className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8">
            Add Child
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddChildModel;
