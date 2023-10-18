'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Sections = ({ name }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`/dashboard/booking/settings/${name}`}
      className={`flex gap-2  px-10 py-3 text-xl border-b-[4px] active:opacity-20 transition-opacity duration-[.25s] font-medium items-center   ${
        pathname.includes(name)
          ? 'bg-[#12aed280] border-[#12aed2]'
          : 'bg-[#f1f3f8]'
      }`}
    >
      {name}
    </Link>
  );
};
export default Sections;
