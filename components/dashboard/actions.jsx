import React, { useState } from 'react';
import {
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import { BiMessageEdit, BiSelectMultiple } from 'react-icons/bi';
import { LuShapes } from 'react-icons/lu';
import { RiNewspaperLine } from 'react-icons/ri';
import { BsList } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdCancelPresentation, MdShoppingCartCheckout } from 'react-icons/md';
import { PiForkKnifeLight, PiNumberZeroBold } from 'react-icons/pi';

function Actions() {
  const [showAction, setShowAction] = useState(true);
  const [showActivity, setShowActivity] = useState(true);

  const ActionIcon = ({ icon, content, onClick }) => {
    return (
      <div className="bg-gray-100 text-gray-500 flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1">
        {icon}
        <div>{content}</div>
      </div>
    );
  };
  const ActivityIcon = ({ icon, content, className, onClick }) => {
    return (
      <div
        className={`!${className} text-[#01233f] flex flex-col items-center justify-center rounded gap-1`}
      >
        {icon}
        <div>{content}</div>
      </div>
    );
  };

  return (
    <div className="h-fit py-3 w-full flex flex-col rounded-xl px-3 ">
      <div className="my-3 pb-3 rounded-lg shadow">
        <div className="flex p-1 px-2 justify-between border ">
          <div className="flex gap-1 text-[#01233f]">
            <BsList size={23} />
            <h3 className="  font-medium">Action Menu</h3>
          </div>
          <button onClick={() => setShowAction(!showAction)}>
            {showAction == true ? (
              <AiOutlineMinus size={23} />
            ) : (
              <AiOutlinePlus size={23} />
            )}
          </button>
        </div>
        {showAction == true && (
          <>
            <div className="grid grid-cols-3 gap-2 mt-2 p-2 border-b-2">
              <ActionIcon
                icon={<BiSelectMultiple size={30} />}
                content={'send'}
              />
              <ActionIcon
                icon={<div className="text-2xl">0</div>}
                content={'Selected'}
              />
              <ActionIcon icon={<AiOutlineEdit size={30} />} content={'Edit'} />
              <ActionIcon icon={<BiMessageEdit size={30} />} content={'Note'} />
              <ActionIcon
                icon={<HiOutlineMail size={30} />}
                content={'Message'}
              />
              <ActionIcon
                icon={<AiOutlineEye size={30} />}
                content={'Preview'}
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 px-2 ">
              <ActionIcon
                icon={<AiOutlineCheck size={30} />}
                content={'Check in'}
              />
              <ActionIcon
                icon={<AiOutlineArrowRight size={30} />}
                content={'Check out'}
              />
              <ActionIcon
                icon={<MdCancelPresentation size={30} />}
                content={'Absent'}
              />
            </div>
          </>
        )}
      </div>
      <div className="my-3 pb-3 rounded-lg shadow">
        <div className="flex p-1 px-2 justify-between border ">
          <div className="flex gap-1 text-[#01233f]">
            <BsList size={23} />
            <h3 className="  font-medium">New Activity</h3>
          </div>

          <button onClick={() => setShowActivity(!showActivity)}>
            {showActivity == true ? (
              <AiOutlineMinus size={23} />
            ) : (
              <AiOutlinePlus size={23} />
            )}
          </button>
        </div>
        {showActivity == true && (
          <div className="grid grid-cols-3 gap-2 mt-2 p-2 ">
            <ActivityIcon
              icon={<RiNewspaperLine size={30} />}
              content={'L&D'}
            />
            <ActivityIcon icon={<LuShapes size={30} />} content={'General'} />
            <ActivityIcon
              icon={<PiForkKnifeLight size={30} />}
              content={'Food/Drink'}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Actions;
