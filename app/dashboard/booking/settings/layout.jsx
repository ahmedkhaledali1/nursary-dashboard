'use client';
import Sections from '@/components/settings/sections';
import React, { useEffect, useState } from 'react';
import { Audio, Dna, Triangle } from 'react-loader-spinner';
import { FillCircleLoader, HelixLoader } from 'react-loaders-kit';

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col text-[#01233f]">
      <div className="flex justify-between items-center w-full p-5 h-[4rem] border-b-2 border-gray-200">
        <h1 className="font-semibold text-3xl ">Settings</h1>
      </div>
      <div className="w-full flex gap-4 pt-8  justify-center">
        <Sections name={'session'} />
        <Sections name={'extras'} />
        <Sections name={'funding'} />
        <Sections name={'layouts'} />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
