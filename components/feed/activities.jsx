import Image from 'next/image';
import React from 'react';

function Activities() {
  return (
    <div className="flex flex-col   text-[#01233f]">
      <div className="h-[75vh] overflow-y-auto w-[35rem] ">
        <h1 className="text-lg font-semibold w-full text-center p-1 border-b mb-3">
          New Activity
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex h-[6rem] hover:bg-gray-200 bg-gray-100">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={60}
              height={60}
            />
            <div className="flex p-4 px-3 text-xl font-semibold items-center">
              Learning & Development
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200 bg-gray-100">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex  p-4 px-3 text-xl font-semibold  items-center">
              General
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200 bg-gray-100">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-3 text-xl font-semibold  items-center">
              Food/Drink
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200 bg-gray-100">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-3 text-xl font-semibold  items-center">
              Toilting
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200 bg-gray-100">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4  px-3 text-xl font-semibold  items-center">
              Nap
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200 bg-gray-100">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-3 text-xl font-semibold  items-center">
              Accident/Incident
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
