'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Sections = ({ name }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`/dashboard/booking/settings/${name}`}
      className={` px-1 text-2xl flex gap-2 ${
        pathname.includes(name)
          ? 'border-b-4 py-1 mb-2 font-medium border-b-sky-700'
          : ''
      }`}
    >
      {name}
    </Link>
  );
};
export default Sections;
