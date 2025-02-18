import React from 'react';
import { Text, Image } from '@/components/atoms';
export default function StepperSummary({ steppers, current, currentIndex }) {
    return (
        <ul className="flex flex-col overflow-hidden">
            {steppers?.map((val, index) => (
                <li key={index} className={` flex relative `}>
                    <div className=" flex flex-col items-center  ">
                        <div className={`!h-[53px] !w-[53px] flex justify-center items-center font-medium ${index <= currentIndex ? '' : ''} rounded-full border border-black`}>
                            <Image src={val?.icon} width={24} />
                        </div>
                        {index !== steppers.length - 1 && (
                            <div className={`!w-[1px] h-full mt-2 md:mt-0 md:h-full md:w-px md:flex-1 block-story group-last:hidden`}></div>
                        )}
                    </div>
                    <div className="mt-1 pb-5 w-full pl-4">
                        <div className=''>
                            <Text className="block text-sm font-medium text-[#333333] custom-font !tracking-widest !text-[20px]" align="left">{val?.title}</Text>
                            <Text className="!text-[20px] text-[#575757] sf-pro" align="left">
                                {val?.description}
                            </Text>
                            <Text className="!text-[20px] text-[#575757] sf-pro" align="left">
                                25th July 2023
                            </Text>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
