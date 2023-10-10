'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { SearchBar } from '../children/search';
import ModalContext from '@/context/ModelContext';

function EditFundingModel({ fundings, setFundings, selectedFunding }) {
  const { closeModal } = useContext(ModalContext);
  const [form, setForm] = useState(selectedFunding);
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const editFunding = (e) => {
    e.preventDefault();
    if (form.title !== '') {
      const selectedFundingIndex = fundings.findIndex(
        (funding) => funding === selectedFunding
      );
      // console.log(selectedSessionIndex);
      const updatedFundings = [...fundings];
      updatedFundings[selectedFundingIndex] = form;
      console.log(updatedFundings);
      setFundings(updatedFundings);
      closeModal();
      console.log(updatedFundings);
    }
  };
  useEffect(() => {
    setForm(selectedFunding);
  }, []);
  return (
    <div className="p-6 text-[#01233f]">
      <div className="h-[70vh] overflow-y-auto w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Add Funding Grant</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                id="title"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="from">from</label>
              <input
                name="from"
                value={form.from}
                onChange={handleChange}
                id="from"
                type="date"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="rate">Hourly Rate</label>
              <input
                name="rate"
                value={form.rate}
                onChange={handleChange}
                id="rate"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>

          <button
            onClick={editFunding}
            className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8"
          >
            Edit Funding
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditFundingModel;
