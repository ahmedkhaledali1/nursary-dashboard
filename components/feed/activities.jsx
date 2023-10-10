import Image from 'next/image';
import React from 'react';

function Activities() {
  return (
    <div className="flex flex-col px-6  text-[#01233f]">
      <div className="h-[80vh] overflow-y-auto w-[60rem] rounded-xl ">
        <h1 className="text-2xl font-medium p-4 border-b mb-3">New Activity</h1>
        <div className="flex flex-col gap-4">
          <div className="flex h-[6rem] hover:bg-gray-200">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-9 text-2xl font-semibold items-center">
              Learning & Development
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-9 text-2xl font-semibold items-center">
              General
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-9 text-2xl font-semibold items-center">
              Food/Drink
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-9 text-2xl font-semibold items-center">
              Toilting
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-9 text-2xl font-semibold items-center">
              Nap
            </div>
          </div>
          <div className="flex h-[6rem] hover:bg-gray-200">
            <Image
              src={'/sidebar/logo.png'}
              alt="image"
              width={70}
              height={90}
            />
            <div className="flex p-4 px-9 text-2xl font-semibold items-center">
              Accident/Incident
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
