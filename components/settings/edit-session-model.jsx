'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { SearchBar } from '../children/search';
import ModalContext from '@/context/ModelContext';

function EditSessionModel({ sessions, setSessions, selectedSession }) {
  const { closeModal } = useContext(ModalContext);
  const [form, setForm] = useState(selectedSession);
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const selectedSessionIndex = sessions.findIndex(
    (session) => session === selectedSession
  );
  console.log(selectedSessionIndex);
  const addSession = (e) => {
    e.preventDefault();
    if (form.name !== '') {
      const updatedSessions = [...sessions];
      updatedSessions[selectedSessionIndex] = form;
      console.log(updatedSessions);
      setSessions(updatedSessions);
      closeModal();
      console.log(sessions);
    }
  };
  useEffect(() => {
    // setForm(selectedSession);
  }, []);
  return (
    <div className="p-6 text-[#01233f]">
      <div className="h-[70vh] overflow-y-auto w-[30rem] border rounded-xl p-4">
        <h1 className="font-semibold text-xl">Add: Children Session</h1>
        <form className="p-3 flex flex-col gap-5">
          <div className="flex gap-5">
            <div className=" w-[70%] flex flex-col gap-1">
              <label htmlFor="name">Session Name</label>
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
              <label htmlFor="acronym">Acronym</label>
              <input
                name="acronym"
                value={form.acronym}
                onChange={handleChange}
                id="acronym"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-fit">
              <label htmlFor="from">From</label>
              <input
                name="from"
                value={form.from}
                onChange={handleChange}
                id="from"
                type="time"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <label htmlFor="to">to</label>
              <input
                name="to"
                value={form.to}
                onChange={handleChange}
                id="to"
                type="time"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-medium">Session Fees</h4>
            <p>
              Set your pricing by age category and set your charge for any
              additional hours. Do not know your hourly rate?
            </p>
            <p>Price per hour = Session Cost / Hours</p>
          </div>
          <div className="flex flex-col gap-3 p-2">
            <h4 className="self-end font-medium">Price per Hour</h4>
            <div className="flex justify-between">
              <div>Under 1 years old</div>
              <div className="flex bg-white gap-1">
                <div>£ -</div>
                <input
                  name="underOne"
                  value={form.underOne}
                  onChange={handleChange}
                  type="text"
                  className="w-[75px] outline-none border rounded-lg px-2 focus:border-[#365772] focus:border-2 "
                  placeholder="e.g"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>1 up to 2 years old</div>
              <div className="flex bg-white gap-1">
                <div>£ -</div>
                <input
                  name="oneToTwo"
                  value={form.oneToTwo}
                  onChange={handleChange}
                  type="text"
                  className="w-[75px] outline-none border rounded-lg px-2 focus:border-[#365772] focus:border-2 "
                  placeholder="e.g"
                />
              </div>{' '}
            </div>
            <div className="flex justify-between">
              <div>2 up to 3 years old</div>
              <div className="flex bg-white gap-1">
                <div>£ -</div>
                <input
                  name="twoToThree"
                  value={form.twoToThree}
                  onChange={handleChange}
                  type="text"
                  className="w-[75px] outline-none border rounded-lg px-2 focus:border-[#365772] focus:border-2 "
                  placeholder="e.g"
                />
              </div>{' '}
            </div>
            <div className="flex justify-between">
              <div>+3 years old</div>
              <div className="flex bg-white gap-1">
                <div>£ -</div>
                <input
                  name="overThree"
                  value={form.overThree}
                  onChange={handleChange}
                  type="text"
                  className="w-[75px] outline-none border rounded-lg px-2 focus:border-[#365772] focus:border-2 "
                  placeholder="e.g"
                />
              </div>
            </div>
          </div>
          <button
            onClick={addSession}
            className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8"
          >
            Add Session
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditSessionModel;
