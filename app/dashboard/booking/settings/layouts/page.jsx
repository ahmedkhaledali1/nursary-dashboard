'use client';
import AddBankDetailsModel from '@/components/settings/add-bank-details-model';
import ModalContext from '@/context/ModelContext';
import React, { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';

function PageOut() {
  const [bankDetails, setBankDetails] = useState(null);
  const { openModal, closeModal, childrens, staffs, rooms } =
    useContext(ModalContext);
  console.log(bankDetails);
  const handleOpenModal = () => {
    // const modalContent = <AddSessionModel sessions setSessions />;
    openModal(
      <AddBankDetailsModel
        bankDetails={bankDetails}
        setBankDetails={setBankDetails}
      />
    );
  };
  return (
    <div className="w-full flex justify-center mt-5 text-[#01233f]">
      <div className="w-[85%] border rounded-lg">
        <div className="flex justify-between">
          <div className="flex flex-col p-3 px-4 border-b ">
            <h2 className="font-semibold pb-4 pt-3">Invoicing Layout</h2>
            <p>
              Customise what details are shared across the invoices you generate
              and share with children contacts.
            </p>
          </div>
          <div className="p-6">
            <RiDeleteBin5Line
              className="cursor-pointer"
              onClick={() => setBankDetails(null)}
              size={30}
            />
          </div>
        </div>

        {bankDetails ? (
          <div className="flex flex-col h-[50vh] overflow-y-auto">
            <div className="flex flex-col p-4 border-b ">
              <h2 className="font-semibold py-4">Bank Details</h2>
              <p>Add your bank details</p>
            </div>
            <div className="w-full flex justify-around p-5">
              <div className="flex flex-col gap-3">
                <p className="font-medium">Bank Name</p>
                <p>{bankDetails.bankName}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium">Sort Code</p>
                <p>{bankDetails.sortCode}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium">Account Number</p>
                <p>{bankDetails.AcountNumber}</p>
              </div>
            </div>
            <div className="flex flex-col p-4 border-b gap-2 ">
              <h2 className="font-semibold py-4">Payment Terms</h2>
              <p>
                Describe your payment terms so that your children contacts are
                aware of your condition
              </p>
              <p>{bankDetails.paymentTerms}</p>
            </div>
            <div className="flex flex-col p-4 border-b gap-2">
              <h2 className="font-semibold py-4">Invoicing Footer</h2>
              <p>
                Choose what additional information you wish to communicate
                across your Invoices.
              </p>
              <p>{bankDetails.invoicingFooter}</p>
            </div>
          </div>
        ) : (
          <div className="p-20 text-xl font-medium flex items-center gap-4">
            <AiOutlinePlus onClick={handleOpenModal} size={50} />
            <p>Add Display Details</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageOut;
