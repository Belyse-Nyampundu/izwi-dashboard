'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { RxDashboard, RxPerson, RxCounterClockwiseClock } from 'react-icons/rx';

const Sidebar = () => {
  const [activeNavItem, setActiveNavItem] = useState("/dasboard");

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };
  return (
    <div className="h-screen w-120 bg-teal-600 fixed ">
       <img src="/images/huza.png" alt="Logo" className="ml-5 mb-28 w-64 h-20 mt-16 items-center" />
    <div className="mt-5 ">
    <div className={`ml-8 mb-16 cursor-pointer ${activeNavItem === '/person' ? 'text-black' : 'text-white' }`}
          onClick={() => handleNavItemClick('/postjob')}>
          
          <Link href="/postjob">
            <div className="flex"><RxPerson size={24} className="mr-2" />
              Employer
            </div>
          </Link>
        </div>
    <div className={`ml-8 cursor-pointer ${ activeNavItem === '/jobPosting' ? 'text-black' : 'text-white' }`}
          onClick={() => handleNavItemClick('/jobPosting')}>
          <Link href="/jobPosting">
            <div className="flex"><RxCounterClockwiseClock size={24} className="mr-2" />
              Job History
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

