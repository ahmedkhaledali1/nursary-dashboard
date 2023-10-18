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

function Actions({ selectedChildren, childrens, checkAll }) {
  const [showAction, setShowAction] = useState(true);
  const [showActivity, setShowActivity] = useState(true);

  const ActionIcon = ({ icon, content, onClick }) => {
    return (
      <div className=" text-[#01233f] flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1">
        <div className="bg-[#a1e3f24d]">{icon}</div>
        <div>{content}</div>
      </div>
    );
  };
  // const ActivityIcon = ({ icon, content, className, onClick }) => {
  //   return (
  //     <div
  //       className={`!${className} text-[#01233f] flex flex-col items-center justify-center rounded gap-1`}
  //     >
  //       <div className="bg-[#a1e3f24d]">{icon}</div>
  //       <div>{content}</div>
  //     </div>
  //   );
  // };
  // console.log(selectedChildren);
  // console.log(childrens);
  // console.log(selectedChildren == childrens);

  return (
    <div className="h-fit py-3 w-full flex flex-col  px-3 bg-[#f1f3f8]">
      <div className="my-3 pb-3 rounded-xl shadow bg-white">
        <div className="flex p-1 px-2 justify-between  ">
          <div className="flex gap-1 text-[#01233f]">
            <BsList size={23} />
            <h3 className="  font-semibold">Action Menu</h3>
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
              <button
                onClick={() => checkAll()}
                className={` ${
                  selectedChildren.length == childrens.length
                    ? 'bg-[#a1e3f24d] text-[#01233f]  '
                    : 'bg-[#a1e3f24d] text-[#01233f] opacity-50  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div>
                  <BiSelectMultiple size={30} />
                </div>
                <div>Select All</div>
              </button>

              <div
                className={` ${
                  selectedChildren.length > 0
                    ? 'bg-[#a1e3f24d] text-[#01233f]  '
                    : 'bg-[#a1e3f24d] text-[#01233f] opacity-50  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  {selectedChildren && selectedChildren.length > 0 ? (
                    <span>{selectedChildren.length}</span>
                  ) : (
                    <span>0</span>
                  )}
                </div>
                <div>Selected</div>
              </div>

              <div
                className={` ${
                  selectedChildren.length > 0
                    ? 'bg-[#a1e3f24d] text-[#01233f]  '
                    : 'bg-[#a1e3f24d] text-[#01233f] opacity-50  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  <AiOutlineEdit size={30} />
                </div>
                <div>Edit</div>
              </div>
              <div
                className={` ${
                  selectedChildren.length > 0
                    ? 'bg-[#a1e3f24d] text-[#01233f]  '
                    : 'bg-[#a1e3f24d] text-[#01233f] opacity-50  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  <BiMessageEdit size={30} />
                </div>
                <div>Note</div>
              </div>

              <div
                className={` ${
                  selectedChildren.length > 0
                    ? 'bg-[#a1e3f24d] text-[#01233f]  '
                    : 'bg-[#a1e3f24d] text-[#01233f] opacity-50  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  <HiOutlineMail size={30} />
                </div>
                <div>Message</div>
              </div>
              <div
                className={` ${
                  selectedChildren.length > 0
                    ? 'bg-[#a1e3f24d] text-[#01233f]  '
                    : 'bg-[#a1e3f24d] text-[#01233f] opacity-50  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  <AiOutlineEye size={30} />
                </div>
                <div>Preview</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 px-2 ">
              <div
                className={` ${
                  selectedChildren.length > 0
                    ? 'bg-[#afdc5c80] text-[#01233f] opacity-60 '
                    : 'bg-[#afdc5c80] text-[#01233f] opacity-60  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  <AiOutlineCheck size={30} />
                </div>
                <div>Check in</div>
              </div>

              <div
                className={` ${
                  selectedChildren.length > 0
                    ? 'bg-[#ff9f8a80] text-[#01233f]  opacity-60 '
                    : 'bg-[#ff9f8a80] text-[#01233f] opacity-60  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  <AiOutlineArrowRight size={30} />
                </div>
                <div>Check out</div>
              </div>

              <div
                className={` ${
                  selectedChildren.length == 1
                    ? 'bg-[#fff28280] text-[#01233f]  '
                    : 'bg-[#fff28280] text-[#01233f] opacity-60  '
                }  flex flex-col items-center justify-center rounded-lg py-2 px-1 gap-1`}
              >
                <div className="text-2xl">
                  <MdCancelPresentation size={30} />
                </div>
                <div>Absent</div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="my-3 pb-3 rounded-xl shadow bg-white">
        <div className="flex p-1 px-2 justify-between  ">
          <div className="flex gap-1 text-[#01233f]">
            <BsList size={23} />
            <h3 className="  font-semibold">New Activity</h3>
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
            <div
              className={` text-[#01233f] flex flex-col  items-center justify-center rounded gap-1`}
            >
              <div className="bg-[#a1e3f24d] p-4">
                <RiNewspaperLine size={25} />
              </div>
              <div>L&D</div>
            </div>
            <div
              className={` text-[#01233f] flex flex-col items-center justify-center rounded gap-1`}
            >
              <div className="bg-[#fff28280] p-2">
                <LuShapes size={25} />
              </div>
              <div>General</div>
            </div>
            <div
              className={` text-[#01233f] flex flex-col items-center justify-center rounded gap-1`}
            >
              <div className="bg-[#afdc5c80] p-2">
                <PiForkKnifeLight size={25} />
              </div>
              <div>Food/Drink</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Actions;
