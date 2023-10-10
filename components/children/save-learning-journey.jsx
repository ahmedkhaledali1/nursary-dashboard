import React from 'react';

function SaveLearinigJourney() {
  const [allchecked, setAllChecked] = React.useState([]);
  function handleBoxChange(e) {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }
  return (
    <div className="px-3 py-3 text-[#01233f]">
      <div className="h-[70vh] overflow-y-auto w-[40rem]  rounded-xl px-2">
        <h1 className="font-semibold  mb-5">Save Learning Journey</h1>
        <form className=" flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="date">From Date</label>
              <input
                type="date"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="date">End Date</label>
              <input
                type="date"
                className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
              />
            </div>
          </div>
          <div className="text-xl">
            <div className="flex justify-between items-center my-2">
              <label htmlFor="EYFS"> Show EYFS Links </label>
              <input
                id="EYFS"
                value="EYFS"
                className="h-5 w-5"
                type="checkbox"
                onChange={handleBoxChange}
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="CoEL"> Show CoEL Links </label>
              <input
                id="CoEL"
                value="CoEL"
                className="h-5 w-5"
                type="checkbox"
                onChange={handleBoxChange}
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="GeneralObservation">
                {' '}
                Include General Observation
              </label>
              <input
                id="GeneralObservation"
                value="GeneralObservation"
                className="h-5 w-5"
                type="checkbox"
                onChange={handleBoxChange}
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="ObservationNotSharedWithParents">
                Include Observation not previously shared with parents
              </label>
              <input
                id="ObservationNotSharedWithParents"
                value="ObservationNotSharedWithParents"
                className="h-5 w-5"
                type="checkbox"
                onChange={handleBoxChange}
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="pageBreak">
                Include page break eech observation
              </label>
              <input
                id="pageBreak"
                value="pageBreak"
                className="h-5 w-5"
                type="checkbox"
                onChange={handleBoxChange}
              />
            </div>
          </div>
          <button className="bg-[#225c8b] rounded-xl text-white p-2 w-full mt-8">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default SaveLearinigJourney;
