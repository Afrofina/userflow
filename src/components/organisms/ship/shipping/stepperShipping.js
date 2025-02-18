import React from 'react'
import { Text } from '@/components/atoms'
export default function Stepper({ steppers, current, currentIndex }) {
    return (
        <ul className=" flex flex-row overflow-hiden pb-12">
            {
                steppers?.map((val, index) => (
                    <li className={` group flex ${steppers?.length - 1 === index ? 'w-3' : 'w-full'}  md:block relative`}>
                        <div className={`min-w-7 min-h-7 flex ${steppers?.length - 1 === index ? 'w-3' : 'w-full'} text-xs align-middle`}>
                            <div className='flex flex-col items-center'>
                                <div className={`w-[55px] h-[55px] relative flex justify-center items-center flex-shrink-0 font-medium ${index <= currentIndex ? 'bg-[#039A00]' : 'bg-white border border-black'} rounded-full`}>
                                    <Text className={`!text-[24px] ${index <= currentIndex ? 'text-white' : 'text-black'}  custom-font !tracking-widest"`} align="center">
                                        {index + 1}
                                    </Text>
                                    {index > currentIndex && <div className='bg-[#FB0000] w-3 h-3 rounded-full absolute top-0 right-0 mr-1'>

                                    </div>}
                                </div>
                                <span className={`block text-sm font-medium ${index <= currentIndex ? 'text-black' : 'text-[#969696]'} sf-pro`}>
                                    {val}
                                </span>
                            </div>
                            {steppers?.length - 1 === index ? <></> : <div className={`mt-[27.5px]  w-full h-px md:flex-1 ${index <= currentIndex ? 'bg-black' : 'bg-black'} group-last:hidden`}></div>}
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}
