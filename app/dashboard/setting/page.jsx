'use client';
import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.onload = () => {
        setIsLoading(false);
      };
    }
  }, []);

  if (isLoading == true) {
    return (
      <div className="w-full h-screen flex items-center  justify-center text-center">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 justify-center text-center">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <div>Comming Soon</div>
    </div>
  );
}

export default Page;
