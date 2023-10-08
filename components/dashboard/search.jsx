'use client';
// import axios from 'axios';
// import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({
  noIcon,
  inputClass,
  searchingArray,
  setSelectedRoom,
}) => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (value) => {
    setInput(value);
    setResults([
      ...searchingArray.filter((child) =>
        child.toLowerCase().startsWith(value.toLowerCase())
      ),
    ]);
  };
  const router = useRouter();

  return (
    <div className="h-full flex gap-2 items-center  relative overflow-visible ">
      {!noIcon && (
        <div className="text-[#225c8b] ">
          <AiOutlineSearch size={40} />
        </div>
      )}

      <input
        className={` !${inputClass} outline-none border-2 rounded-lg hover:shadow focus:shadow border-gray-200 h-full  p-3 bg-inherit text-2xl `}
        value={input}
        onFocus={() => setIsFocused(true)}
        onChange={(e) => handleChange(e.target.value)}
      />
      {input !== '' && isFocused == true && (
        <div
          className={`  w-full z-50   max-h-[400px] 
                           flex flex-col   absolute
                            left-0 top-14 rounded-b-xl pt-2
                         bg-gray-100 text-gray-700
                         overflow-y-auto
                      `}
        >
          {results.map((item) => (
            <div
              key={item}
              onClick={() => {
                setInput(item);
                setIsFocused(false);
              }}
              className="my-1 block hover:bg-blue-gray-200 p-2"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
