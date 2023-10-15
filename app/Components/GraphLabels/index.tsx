import React from 'react';

const Labels = () => {
  return (
    <div className=' ml-[47px] mt-16' >
        <div className='flex ' >
   <div className="h-[20px] w-[20px] rounded-md mt-10 bg-[#62B19E]  ml-[-100px] "></div>
   <h3 className='text-black mt-10 ml-[10px] text-[15px] '>Farming</h3>
   </div>
   <div className='flex'>
   <div className="h-[20px] w-[20px] rounded-md mt-10 bg-[#7ED7C2]  ml-[-100px]"></div>
   <h3 className='text-black mt-10 ml-[10px] text-[15px] '>Construction</h3>
   </div>
   <div className='flex'>
   <div className="h-[20px] w-[20px] rounded-md mt-10 bg-[#C8FEF1]  ml-[-100px] "></div>
   <h3 className='text-black mt-10 ml-[10px] text-[15px] '>Retail</h3>
   </div>
   <div className='flex'>
   <div className="h-[20px] w-[20px] rounded-md mt-10 bg-[#E3E6E5]   ml-[-100px]"></div>
   <h3 className='text-black mt-10  ml-[10px] text-[15px]'>Housekeeping</h3>
   </div>
    </div>
  );
};

export default Labels;