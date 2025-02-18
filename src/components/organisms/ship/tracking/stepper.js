import React from 'react';
import { Text, Image } from '@/components/atoms';
export default function StepperTracking({ steppers, current, currentIndex }) {
    return (
        <ul className="flex flex-col overflow-hidden pb-12">
            {steppers?.map((val, index) => (
                <li key={index} className={` flex relative `}>
                    <div className=" flex flex-col items-center  ">
                        <div className={`!h-[36px] !w-[36px] flex justify-center items-center font-medium ${index <= currentIndex ? 'bg-[#CCD4FE]' : 'bg-[#CCD4FE]'} rounded-full`}>
                            <Image src={val?.icon} width={24} />
                        </div>
                        {index !== steppers.length - 1 && (
                            <div className={`!w-[2px] !h-[123px] mt-2 md:mt-0 md:!h-[123px] ${index <= currentIndex ? 'bg-[#0028FB]' : 'bg-[#0028FB]'} group-last:hidden`}></div>
                        )}
                    </div>
                    <div className="mt-1 pb-5 w-full pl-4">
                        <div className=''>
                            <div className='flex justify-between items-start'>
                                <Text className="block text-sm font-medium text-[#333333] sf-pro !text-[18px]" align="left">{val?.title}</Text>

                                <Text className="bg-[#CDE6CC] text-[#038300] px-3 py-1 rounded-full">
                                    {val?.status}
                                </Text>
                            </div>

                            <Text className="!text-[18px] text-[#575757] sf-pro w-2/3" align="left">
                                {val?.description}
                            </Text>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
