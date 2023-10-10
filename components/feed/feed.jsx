import React from 'react';

function Feed() {
  return (
    <div className="px-6 text-[#01233f]">
      <div className="h-[65vh] overflow-y-auto w-[25rem]  rounded-xl p-2">
        <h1 className="font-semibold text-xl mb-4">Filter</h1>
        <form className=" flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="date">Date Range</label>
              <input
                // name="name"
                // value={form.name}
                // onChange={onChange}
                // id="name"
                type="date"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="name">Author</label>
              <input
                // name="author"
                // value={form.lastName}
                // onChange={onChange}
                // id="lastName"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="sex">Room</label>
              <input
                // name="sex"
                // value={form.sex}
                // onChange={onChange}
                // id="sex"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="birthDay">Visibility</label>
              <input
                // name="birthDay"
                // value={form.birthDay}
                // onChange={onChange}
                // id="birthDay"
                type="text"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
          <button className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-4">
            Filter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feed;
