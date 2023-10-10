'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { SearchBar } from '../children/search';
import ModalContext from '@/context/ModelContext';

function EditExtrasModel({ extrases, setExtrases, selectedExtras }) {
  const { closeModal } = useContext(ModalContext);
  const [form, setForm] = useState(selectedExtras);
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const addExreases = (e) => {
    e.preventDefault();
    if (form.name !== '') {
      const selectedExtraseIndex = extrases.findIndex(
        (extrases) => extrases === selectedExtras
      );
      // console.log(selectedSessionIndex);
      const updatedExtrases = [...extrases];
      updatedExtrases[selectedExtraseIndex] = form;
      console.log(updatedExtrases);
      setExtrases(updatedExtrases);
      closeModal();
      console.log(updatedExtrases);
    }
  };
  useEffect(() => {
    setForm(selectedExtras);
  }, []);
  return (
    <div className="p-6 text-[#01233f]">
      <div className="h-[70vh] overflow-y-auto w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Edit: Extra Purchase</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex gap-5">
            <div className=" w-[70%] flex flex-col gap-1">
              <label htmlFor="name">Extra Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                id="name"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-[30%] flex flex-col gap-1">
              <label htmlFor="price">Price per item</label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                id="price"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>

          <button
            onClick={addExreases}
            className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8"
          >
            Edit Extra
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditExtrasModel;
