import React from 'react';
import registeredJobseeker from '@/app/hooks/useRegisteredJobseeker';
import registeredEmployer from '@/app/hooks/useRegisteredEmployer';

const Users = () => {
  const { numberOfRegisteredUsers } = registeredJobseeker(); 
  const { numberOfRegisteredEmployer } = registeredEmployer(); 
  const totalRegisteredUsers = numberOfRegisteredUsers+ numberOfRegisteredEmployer;

  return (
    <div>
      <div className="bg-teal-600 mt-12 rounded-lg text-white w-[1140px] h-[90px] ml-[300px]">
        <h1 className="font-bold ml-8 py-6 pr-96 text-3xl">Dashboard</h1>
      </div>

      <div className="gap-[69px] flex mt-222px ml-[200px] mt-9 mr-[93px]">
        <div className="bg-[#D0DFDC] w-25.8 h-18.9 p-5 border border-gray-300 rounded ml-[107px] w-[310px] h-[227px]">
          <h1 className="text-black text-[48px] text-center pt-[58px] pb-[27px]">{totalRegisteredUsers}</h1>
          <h1 className="text-black text-[20px] text-center pb-[41px]">Registered Users</h1>
        </div>

        <div className="bg-[#E5E1E5] w-25.8 h-18.9 p-5 pt-7 border border-gray-300 rounded pl-10 pr-14 ml-[923] w-[310px] h-[227px] flex flex-col justify-center items-center">
          {numberOfRegisteredUsers === 0 ? (
           <p className="text-black text-4xl">Loading...</p>
          ) : (
           <>
            <h1 className="text-black text-[48px] text-center pt-[58px] pb-[27px]">{numberOfRegisteredUsers}</h1>
            <h1 className="text-black text-[20px] text-center">Job Seekers</h1>
          </>
         )}
        </div>

        <div className="bg-[#E5E1E5] w-25.8 h-18.9 p-5 pt-7 border border-gray-300 rounded pl-10 pr-14 ml-[923] w-[310px] h-[227px] flex flex-col justify-center items-center">
             {numberOfRegisteredEmployer === 0 ? (
              <p className="text-black text-4xl">Loading...</p>
            ) : (
            <>
              <h1 className="text-black text-[48px] text-center pt-[58px] pb-[27px]">{numberOfRegisteredEmployer}</h1>
              <h1 className="text-black text-[20px] text-center">Employer</h1>
             </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Users;
