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
  setAssign,
  assign,
}) => {
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    setInput(value);
    setResults([
      searchingArray.filter((child) =>
        child.toLowerCase().startsWith(value.toLowerCase())
      ),
    ]);
  };
  const router = useRouter();

  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     setAssign([...assign, input]);
  //   }
  // };
  const addAsign = (e, newAssign) => {
    e.preventDefault();

    if (assign.includes(newAssign) == true) {
      setAssign([...assign, ...newAssign]);
      setIsFocused(false);

      // console.log('okkok');
    } else if (assign.includes(newAssign) == false) {
      setIsFocused(false);
      setAssign([...assign, ...newAssign]);

      // console.log('aaaaaaaaa');
      // console.log(newAssign);
      // console.log(assign);
      // console.log(assign);
    }
  };
  // console.log(assign.includes('Tarek'));
  // console.log(assign);
  // console.log(assign.find((item) => item == 'Tar'));
  return (
    <>
      <div className="h-full flex gap-2 items-center  relative overflow-visible ">
        {!noIcon && (
          <div className="text-[#225c8b] ">
            <AiOutlineSearch size={40} />
          </div>
        )}

        <input
          className={` !${inputClass} outline-none border-2 rounded-lg hover:shadow focus:shadow border-gray-200 h-full  p-3 bg-inherit text-2xl `}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          //
        />
        {(input != '') & (isFocused == true) && (
          <div
            className={`  w-full z-50   max-h-[400px] 
                           flex flex-col   absolute
                            left-0 top-14 rounded-b-xl pt-2
                         bg-gray-100 text-gray-700
                         overflow-y-auto
                      `}
          >
            {results.map((item) => (
              <button
                key={item}
                onClick={(e) => addAsign(e, item)}
                className="block my-1 hover:bg-blue-gray-200 p-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
