import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { SearchBar } from './search';
import ModalContext from '@/context/ModelContext';

function AddStaffModel() {
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
      <div className="h-[70vh] w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl"> Staff Details</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex gap-5">
            <div className=" w-[70%] flex flex-col gap-1">
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
            {/* <div className=" w-[30%] flex flex-col gap-1">
              <label htmlFor="capacity">capacity</label>
              <input
                name="capacity"
                value={form.capacity}
                onChange={onChange}
                id="capacity"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div> */}
          </div>
          {/* <div className=" w-full flex flex-col gap-1">
            <label htmlFor="capacity">Assign Staff</label>
            <div className="flex items-center gap-2">
              {
                <SearchBar
                  assignStaff={assignStaff}
                  setAssignStaff={setAssignStaff}
                  searchingArray={staffs.map((room) => room.name)}
                  noIcon
                />
              }
              <AiOutlinePlus size={40} />
            </div>
          </div>
          {assignStaff.length > 0 && (
            <div className="border-2 text-xs p-2 text-gray-50 text-w w-full flex gap-2">
              {assignStaff.map((name, index) => (
                <div
                  key={index}
                  className=" flex gap-[3px] p-1 items-center bg-[#01233f] rounded-full"
                >
                  <div>{name}</div>
                  <AiOutlineClose onClick={() => RemoveStaff(name)} />
                </div>
              ))}
            </div>
          )}
          <div className=" w-full flex flex-col gap-1">
            <label htmlFor="capacity">Assign Children</label>
            <div className="flex items-center gap-2">
              {
                <SearchBar
                  assignStaff={assignChildren}
                  setAssignStaff={setAssignChildren}
                  searchingArray={childrens.map((room) => room.name)}
                  noIcon
                />
              }
              <AiOutlinePlus size={40} />
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
          )} */}
          <button className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8">
            Add Child
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStaffModel;
