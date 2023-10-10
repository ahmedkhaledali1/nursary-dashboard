'use client';
import ModalContext from '@/context/ModelContext';
import React, { useContext, useState } from 'react';

function AddBankDetailsModel({ bankDetails, setBankDetails }) {
  const [form, setForm] = useState({
    bankName: '',
    sortCode: '',
    AcountNumber: '',
    paymentTerms: '',
    invoicingFooter: '',
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const { closeModal } = useContext(ModalContext);
  const addBankDetails = () => {
    if (form.bankName != '' && form.sortCode != '' && form.AcountNumber != '') {
      setBankDetails(form);
      closeModal();
    }
  };
  return (
    <div className="p-6 text-[#01233f]">
      <div className="h-[80vh] w-[60rem] overflow-y-auto flex flex-col gap-7 border rounded-xl p-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-xl"> Bank Details</h1>
          <p>Add your bank details</p>
        </div>
        <div className="flex gap-6">
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="bankName">Bank Name</label>
            <input
              name="bankName"
              value={form.bankName}
              onChange={onChange}
              id="bankName"
              type="text"
              className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="sortCode">Sort Code</label>
            <input
              name="sortCode"
              value={form.sortCode}
              onChange={onChange}
              id="sortCode"
              type="text"
              className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="AcountNumber">Account Number</label>
            <input
              name="AcountNumber"
              value={form.AcountNumber}
              onChange={onChange}
              id="AcountNumber"
              type="text"
              className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="font-semibold text-xl">Payment Terms</h1>
          <p>
            Describe your payment terms so that your children contacts are aware
            of your conditions
          </p>
          <textarea
            name="paymentTerms"
            value={form.paymentTerms}
            onChange={onChange}
            id="paymentTerms"
            className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
          ></textarea>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="font-semibold text-xl">Invoicing Footer</h1>
          <p>
            Choose what additional information you wish to communicate across
            your Invoices.
          </p>
          <textarea
            name="invoicingFooter"
            value={form.invoicingFooter}
            onChange={onChange}
            id="invoicingFooter"
            className="border w-full outline-none hover:outline-none p-1 px-3 text-lg"
          ></textarea>
        </div>
        <button
          onClick={addBankDetails}
          className="bg-[#225c8b] rounded-xl text-white py-2 px-5 self-end "
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddBankDetailsModel;
